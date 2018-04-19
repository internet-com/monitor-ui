# vue-article-body
Article body component for Vue 2

## Installation

    npm install @nylira/vue-article-body

## Usage

    <template>
      <article-body>
        <p><strong>Whoops!</strong> The page you visited either does not exist or has been deleted in a website reshuffle. We're sorry for the inconvenience. Try visiting one of these pages below:</p>
        <ul>
          <li><router-link :to="'/'">Dashboard</router-link></li>
          <li><router-link :to="'/signup'">Sign Up</router-link></li>
          <li><router-link :to="'/signin'">Sign In</router-link></li>
        </ul>
      </article-body>
    </template>

    <script>
      import ArticleBody from '@nylira/vue-article-body'
      export default {
        components: {
          ArticleBody
        }
      }
    </script>

    <style>
      .ny-article-body {
        width: 320px;
      }
    </style>
