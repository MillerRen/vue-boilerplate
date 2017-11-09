<template>
  <div class="form-group" :class="{'has-error': field.$error}">
      <label for="">{{label||name}}</label>
      <slot></slot>
      <p class="help-block" v-if="field.$dirty&&!field.required">Field is required</p>
      <p class="help-block" v-if="field.$dirty&&!field.minLength&&field.$params.minLength">Field must have at least {{ field.$params.minLength.min }} characters.</p>
      <p class="help-block" v-if="field.$dirty&&!field[name]">Invalid {{name}}</p>
    </div>
</template>
<script>
export default {
  name: 'FormGroup',
  props: {
    field: {
      type: Object,
      default () {
        return {}
      }
    },
    label: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
<style></style>