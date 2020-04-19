<template>
  <div class="ibb-tag">
    <slot />
  </div>
</template>

<style lang="less">
.ibb-tag {
  display: inline-block;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: rgba(0, 0, 0, 0.65);
  font-size: 14px;
  font-variant: tabular-nums;
  line-height: 1.5;
  list-style: none;
  font-feature-settings: 'tnum';
  height: 22px;
  margin-right: 8px;
  padding: 0 7px;
  font-size: 12px;
  line-height: 24px;
  white-space: nowrap;
  background: #fafafa;
  // border: 1px solid #d9d9d9;
  border-radius: 4px;
  cursor: pointer;
  opacity: 1;
  transition: all 0.3s cubic-bezier(0.215, 0.61, 0.355, 1);
  background-color: #f1f8ff;

  &:hover {
    text-decoration: none;
    background-color: #def;
  }
}
</style>
