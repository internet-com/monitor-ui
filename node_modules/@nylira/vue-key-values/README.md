# vue-key-values
KeyValue component and KeyValues wrapper component for Vue 2.

## Installation

    npm install @nylira/vue-key-values

## Usage

    <template>
      <key-values>
        <key-value>
          <div slot="value">1337</div>
          <div slot="key">People</div>
        </key-value>
        <key-value>
          <div slot="value">506</div>
          <div slot="key">Incidents</div>
        </key-value>
      </key-values>
    </template>

    <script>
      import { KeyValue, KeyValues } from '@nylira/vue-key-values'
      export default {
        name: 'key-values-demo',
        components: {
          KeyValue, KeyValues
        }
      }
    </script>
