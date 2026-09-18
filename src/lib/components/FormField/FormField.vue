<script lang="ts" src="./FormField.script.ts"></script>

<template>
  <div
    v-bind="$attrs"
    :id="id"
    :data-testid="dataTestid"
    class="form-field"
    :class="{ '-error': error }"
  >
    <label v-if="label" :id="labelId" class="label">
      {{ label }}
      <span v-if="required" class="required">*</span>
    </label>
    <div class="control">
      <slot />
    </div>
    <span v-if="hint && !error" :id="hintId" class="hint">{{ hint }}</span>
    <span v-if="error" :id="errorId" class="error" role="alert">{{ error }}</span>
  </div>
</template>
