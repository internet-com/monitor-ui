<template lang="pug">
.ni-select(v-if="type === 'select' || type === 'countries'")
  select(
    :class="css"
    :value="value"
    @input="updateValue($event.target.value)"
    @change="onChange"
    @keyup="onKeyup"
    @keydown="onKeydown")
    option(value="" disabled selected hidden) {{ selectPlaceholder }}
    option(v-if="type === 'countries'" v-for="i in countries" :value="i.value"
    :key="i.key") {{ i.key }}
    option(v-if="options" v-for="i in options" :value="i.value") {{ i.key }}
  .ni-field-select-addon: i.material-icons arrow_drop_down

// .ni-datetime(v-else-if="type === 'datetime'")
  input(
    type="text"
    :class="css"
    @change="onChange"
    @keyup="onKeyup"
    @keydown="onKeydown"
    :placeholder="placeholder"
    :value="value"
    @input="updateValue($event.target.value)")

textarea(v-else-if="type === 'textarea'"
  :class="css"
  @change="onChange"
  @keyup="onKeyup"
  @keydown="onKeydown"
  :placeholder="placeholder"
  :value="value"
  @input="updateValue($event.target.value)")

input(v-else
  :type="type"
  :class="css"
  @change="onChange"
  @keyup="onKeyup"
  @keydown="onKeydown"
  :placeholder="placeholder"
  :value="value"
  @input="updateValue($event.target.value)")
</template>

<script>
// import flatpickr from 'flatpickr'
import countries from './countries.json'
export default {
  name: 'ni-field',
  props: [
    'placeholder',
    'type',
    'size',
    'value',
    'theme',
    'options',
    'change',
    'keyup',
    'keydown'
  ],
  computed: {
    css () {
      let value = 'ni-field'
      if (this.type === 'select' || this.type === 'countries') {
        value += ' ni-field-select'
      }
      if (this.size) value += ` ni-field-size-${this.size}`
      if (this.theme) value += ` ni-field-theme-${this.theme}`
      return value
    },
    selectPlaceholder () {
      if (this.placeholder) return this.placeholder
      else return 'Select option...'
    }
  },
  data: () => ({
    countries: countries
  }),
  methods: {
    updateValue (value) {
      let formattedValue = value.trim()
      // Emit the number value through the input event
      this.$emit('input', formattedValue)
    },
    onChange (...args) { if (this.change) return this.change(...args) },
    onKeyup (...args) { if (this.keyup) return this.keyup(...args) },
    onKeydown (...args) { if (this.keydown) return this.keydown(...args) }
  },
  mounted () {
    let el = this.$el
    if (this.type === 'number') {
      el.addEventListener('focus', function () {
        el.select()
      })
    }
    /* if (this.type === 'datetime') {
      this.picker = flatpickr(el, {
        enableTime: true,
        dateFormat: 'Y-m-d H:i',
        onChange: (dateObj, dateStr) => this.updateValue(dateStr)
      })
      // console.log('its a datetime!', el)
    } */
  }
}
</script>

<style lang='stylus'>
@require '~variables'

.ni-field
  -webkit-appearance none

  border 1px solid var(--input-bc, #ccc)
  border-radius 0

  vertical-align top

  padding 0.1875rem 0.5rem

  display block
  width 100%
  min-width 0

  background var(--input-bg, #fff)

  color var(--txt, #333)
  font-size 16px
  line-height 1.5rem

.ni-field:disabled
  color var(--dim, #666)
  text-shadow none
  box-shadow none
  background var(--app-fg, #eee)
  border var(--app-fg, #eee)

.ni-field:focus
  outline none
  box-shadow none
  border 1px solid var(--link, #00f)

input.ni-field
  height 2rem

textarea.ni-field
  height 4rem
  resize vertical

.ni-select
  position relative

  select
    appearance none
    border-radius 0
    background var(--input-bg, #fff)
    width 100%
    color var(--txt, #333)
    padding-right 2rem

    &:invalid
      color dim

    option
      color txt
      background var(--input-bg, #fff)
      font-family sans
      &:checked
        color var(--bright, #000)
        background var(--hover-bg, #ccf)

  .ni-field-select-addon
    position absolute
    top 0
    right 0

    display flex
    align-items center
    justify-content center
    box-sizing border-box
    height 2rem
    width 2rem
    border-left 1px solid var(--input-bc, #ccc)

    background var(--input-bg, #fff)
    text-align center
    color var(--txt, #333)
    pointer-events none

/*==============================================================================*/

.ni-datetime
  position relative

.ni-datetime:after
  display flex
  align-items center
  justify-content center
  box-sizing border-box
  width 2rem
  height 2rem
  position absolute
  top 0
  right 0
  border 1px solid var(--input-bc, #ccc)
  background var(--app-bg, #fff)
  font-family FontAwesome
  content "\f073"
  text-align center
  color var(--bright)
  pointer-events none

/*==============================================================================*/

.input-group-addon
  background var(--input-bg, #fff)
  border 1px solid var(--input-bc, #ccc)
  border-left none
  padding 0 0.5rem
  color var(--txt, #333)
  line-height 1.875rem
  font-size 0.75rem

@media screen and (min-width 360px)
  .input-group-addon
    font-size 1rem

/*==============================================================================*/
/* WebKit, Blink, Edge */

.ni-field::-webkit-input-placeholder
  color var(--dim, #666)

/* Mozilla Firefox 4 to 18 */
.ni-field:-moz-placeholder
  color var(--dim, #666)
  opacity 1

/* Mozilla Firefox 19+ */
.ni-field::-moz-placeholder
  color var(--dim, #666)
  opacity 1

/* Internet Explorer 10-11 */
.ni-field:-ms-input-placeholder
  color var(--dim, #666)

/* Standard (https//drafts.csswg.org/selectors-4/#placeholder) */
.ni-field:placeholder-shown
  color var(--dim, #666)

/*==============================================================================*/
/* sizes */

.ni-field.ni-field-size-sm
  height 1.5rem
  font-size 0.75rem
  padding-left 0.5rem
  padding-right 0.5rem

.ni-field.ni-field-size-lg
  height 3rem
  font-size 1.125rem
  padding-left 0.75rem
  padding-right 0.75rem

/*==============================================================================*/
/* tendermint styles */

.ni-field.ni-field-theme-tendermint
  color #fff
  background hsl(210,70%,18%)
  border-color hsl(210,70%,38%)

.ni-field.ni-field-theme-tendermint:focus
  border-color hsl(210,70%,43%)

.ni-field.ni-field-theme-tendermint::-webkit-input-placeholder
  color hsl(210,70%,70%)

/* Mozilla Firefox 4 to 18 */
.ni-field.ni-field-theme-tendermint:-moz-placeholder
  color hsl(210,70%,70%)
  opacity 1

/* Mozilla Firefox 19+ */
.ni-field.ni-field-theme-tendermint::-moz-placeholder
  color hsl(210,70%,70%)
  opacity 1

/* Internet Explorer 10-11 */
.ni-field.ni-field-theme-tendermint:-ms-input-placeholder
  color hsl(210,70%,70%)

/* Standard (https//drafts.csswg.org/selectors-4/#placeholder) */
.ni-field.ni-field-theme-tendermint:placeholder-shown
  color hsl(210,70%,70%)
</style>
