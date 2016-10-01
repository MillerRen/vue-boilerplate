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
import store from 'src/vuex/store'

export default {
  store,
  components: {
  },
  data: () => {
    return {
    }
  },
  methods: {
  }
}
</script>

<style>

</style>
