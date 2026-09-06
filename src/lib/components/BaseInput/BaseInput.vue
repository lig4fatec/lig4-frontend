<script setup lang="ts">
import type { IBaseInputProps } from './BaseInput.script'

withDefaults(defineProps<IBaseInputProps>(), {
  label: '',
  placeholder: '',
  error: '',
  disabled: false,
  type: 'text',
})

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

function handleInput(event: Event): void {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <div class="base-input" :class="{ '-error': error, '-disabled': disabled }">
    <label v-if="label" class="base-input > label">{{ label }}</label>
    <input
      class="base-input > field"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      @input="handleInput"
    />
    <span v-if="error" class="base-input > error">{{ error }}</span>
  </div>
</template>
