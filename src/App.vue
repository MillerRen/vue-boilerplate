<template>
    <router-view></router-view>
    <alert :show.sync="alert.show" type="warning" placement="top" width="40%" dismissable="true" duration="3000">
      {{alert.message}}
    </alert>
    <modal :show.sync="modal.show" effect="fade" title="confirm">
      <div slot="modal-body" class="modal-body">{{modal.message}}</div>
    </modal>
</template>

<script>
import 'bootstrap/less/bootstrap.less'
import {alert, modal} from 'vue-strap'

export default {
  components: {
    alert,
    modal
  },
  data: () => {
    return {
      alert: {
        show: false,
        message: ''
      },
      modal: {
        show: false,
        message: ''
      }
    }
  },
  methods: {
    toast (message) {
      this.alert.show = true
      this.alert.message = message
    },
    confirm (message) {
      this.modal.show = true
      this.modal.message = message
    }
  }
}
</script>

<style>

</style>
