<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="base-input"
    :class="{ '-error': error, '-disabled': disabled }"
  >
    <label v-if="label" class="label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    <input
      class="field"
      :type="type"
      :value="modelValue"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      @input="handleInput"
    />
    <span v-if="hint && !error" class="hint">{{ hint }}</span>
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<script lang="ts" src="./BaseInput.ts"></script>
