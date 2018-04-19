# vue-form-msg
Form input errors and descriptions for Vue 2.

## Installation

    npm install @nylira/vue-form-msg

## Usage

    <template>
      <form-msg name="Display Name" type="required" v-if="!$v.fields.displayName.required"></form-msg>
      <form-msg name="Display Name" type="length" min="2" max="20" v-if="!$v.fields.displayName.menLength || !$v.fields.displayName.maxLength"></form-msg>
    </template>

    <script>
      import FormMsg from '@nylira/vue-form-msg'
      export default {
        components: {
          FormMsg
        }
      }
    </script>

    <style>
      .ni-form-msg {
        font-size 1.25rem;
      }
    </style>

## Props
TODO! For now, read the `./src/index.vue` file.

