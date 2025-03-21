<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-breadcrumbs :items="items">
          <template v-slot:divider>
            <v-icon icon="mdi-chevron-right"></v-icon>
          </template>
        </v-breadcrumbs>
      </v-col>
      <v-col cols="12" md="6">
        <v-table>
          <tr >
            <td colspan="3" class="d-flex justify-center">
              <v-img
              :width="350"
              :height="350"
              aspect-ratio="1/1"
              cover
              rounded="lg"
              class="mb-5 mx-5"
              :src="mainImage"
              ></v-img>
            </td>
          </tr>
          <tr class="d-flex justify-center ma-2 pa-2">
            <td v-for="(pic,i) in product.images" :key="i">
              <v-img
              :width="70"
              :height="70"
              cover
              rounded="lg"
              :src="pic"
              @click="changeMainImage(pic)"
              ></v-img>
            </td>
          </tr>  
        </v-table>
      </v-col>
      <v-col cols="12" md="6">
        <h2><font color="#D92323">【{{product.category}}】</font>&nbsp;{{product.name}}</h2>
        <v-divider></v-divider>
        <p class="my-2 font-weight-bold">售價{{product.price}}</p>
        <p style="white-space: pre;">{{product.description}}</p>
        <v-form :disabled="isSubmitting" @submit.prevent="submit">
              <v-text-field type="number" min="0" v-model.number="quantity.value.value" :error-messages="quantity.errorMessage.value" density="confortable" variant="outlined" placeholder="數量"
              style="width: 570px"
              ></v-text-field>
              <v-btn type="submit" prepend-icon="mdi-cart" :loading="isSubmitting"
              style="width:570px" color="seventh">加入購物車</v-btn>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
  <v-overlay class="align-center justify-center text-center"
  :model-value="!product.sell" persistent
  >
  <h1 class="text-h1 text-red">已下架</h1>
  <br>
  <v-btn to="/" color="third">回首頁</v-btn>
  </v-overlay>
</template>

<script setup>
import { ref, onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useApi } from '@/composables/axios'
import { useSnackbar } from 'vuetify-use-dialog'
import { useForm, useField } from 'vee-validate'
import * as yup from 'yup'
import { useUserStore } from '@/store/user'

const route = useRoute()
const router = useRouter()
const { api, apiAuth } = useApi()
const createSnackbar = useSnackbar()
const user = useUserStore()

const product = ref({
  _id: '',
  name: '',
  price: 0,
  description: '',
  images: [],
  sell: true,
  category: ''
})

// 主圖片
const mainImage = ref(null)

// 當 product 物件更新後，設定 mainImage 的值
watch(() => product.value.images, (images) => {
  mainImage.value = images[0]
})
// const mainImage = ref(product.value.images[0])
// const mainImage = computed(() => product.value.images[0])
const changeMainImage = (image) => {
  mainImage.value = image
}

const schema = yup.object({
  quantity: yup.number().typeError('缺少數量').required('缺少數量').min(1, '數量最小為 1')
})
const { isSubmitting, handleSubmit } = useForm({
  validationSchema: schema,
  initialValues: {
    quantity: 1
  }
})
const quantity = useField('quantity')

const submit = handleSubmit(async (values) => {
  if (!user.isLogin) {
    router.push('/login')
    return
  }
  try {
    const { data } = await apiAuth.patch('/users/cart', {
      product: product.value._id,
      quantity: values.quantity
    })
    user.cart = data.result
    createSnackbar({
      text: '新增成功',
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'forth',
        location: 'bottom'
      }
    })
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'seventh',
        location: 'bottom'
      }
    })
  }
})

const items = ref([])

onMounted(async () => {
  try {
    const { data } = await api.get('/products/' + route.params.id)
    product.value._id = data.result._id
    product.value.name = data.result.name
    product.value.price = data.result.price
    product.value.description = data.result.description
    product.value.images = data.result.images
    product.value.sell = data.result.sell
    product.value.category = data.result.category
    // 讓頁面改成商品名稱
    document.title = `發記冰品 | ${product.value.name}`

    // 麵包屑
    items.value = [
      {
        title: '首頁',
        disabled: false,
        href: '/faji-front/#/'
      },
      {
        title: '快速預訂',
        disabled: false,
        href: '/faji-front/#/product'
      },
      {
        title: `${product.value.name}`,
        disabled: true,
        href: '/product#/product/'
      }
    ]
  } catch (error) {
    const text = error?.response?.data?.message || '發生錯誤，請稍後再試'
    createSnackbar({
      text,
      showCloseButton: false,
      snackbarProps: {
        timeout: 2000,
        color: 'seventh',
        location: 'bottom'
      }
    })
    router.push('/')
  }
})
</script>

<style scoped>
input {
  padding-inline: 30px !important;;
}
</style>
