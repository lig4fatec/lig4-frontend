<template>
  <Teleport to="body">
    <div
      v-bind="$attrs"
      :id="id"
      :data-testid="dataTestid"
      class="base-modal"
      :class="{ '-open': isOpen }"
      @click="handleBackdropClick"
    >
      <button class="backdrop" @click="handleBackdropClick" />
      <div
        class="content"
        :class="[`-${size}`, { '-open': isOpen }]"
        @click="handleContentClick"
      >
        <header v-if="title || $slots.header" class="header">
          <slot name="header">
            <h2 class="title">{{ title }}</h2>
          </slot>
          <button class="close" @click="handleCloseClick">×</button>
        </header>
        <div class="body">
          <slot />
        </div>
        <footer v-if="$slots.footer" class="footer">
          <slot name="footer" />
        </footer>
      </div>
    </div>
  </Teleport>
</template>

<script lang="ts" src="./BaseModal.ts"></script>
