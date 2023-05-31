<script setup>
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Brute Force</template>

    <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Backtracking</template>

    <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Branch and Bound</template>

    <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Divide and Conquer</template>

    <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Dynamic Programming</template>

    <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Greedy</template>

    <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Simple Recursive</template>

    <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>Uncategorized</template>

    <li><router-link :to="{ name: 'Brute Force' }">Brute Force</router-link></li>
  </WelcomeItem>
</template>


