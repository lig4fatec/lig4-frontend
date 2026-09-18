<script lang="ts" src="./ConfirmDialog.script.ts"></script>

<template>
  <BaseModal
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    :is-open="isOpen"
    size="sm"
    @close="handleCancel"
  >
    <template #header>
      {{ title }}
    </template>

    <p class="message">{{ message }}</p>

    <template #footer>
      <BaseButton variant="ghost" size="sm" @click="handleCancel">
        {{ cancelText }}
      </BaseButton>
      <BaseButton :variant="variant" size="sm" @click="handleConfirm">
        {{ confirmText }}
      </BaseButton>
    </template>
  </BaseModal>
</template>
