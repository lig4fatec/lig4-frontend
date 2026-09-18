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
      {{ title || $t('components.confirmDialog.title') }}
    </template>

    <p class="message">{{ message }}</p>

    <template #footer>
      <BaseButton variant="ghost" size="sm" @click="handleCancel">
        {{ cancelText || $t('components.confirmDialog.cancel') }}
      </BaseButton>
      <BaseButton :variant="variant" size="sm" @click="handleConfirm">
        {{ confirmText || $t('components.confirmDialog.confirm') }}
      </BaseButton>
    </template>
  </BaseModal>
</template>

<script lang="ts" src="./ConfirmDialog.script.ts"></script>
