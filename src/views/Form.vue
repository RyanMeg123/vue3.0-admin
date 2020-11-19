<template>
  <div class="form-container">
    <a-form labelAlign="left">
      <a-form-item label="Activity name" v-bind="validateInfos.name">
        <a-input
          v-model:value="modelRef.name"
          @blur="validate('name', { trigger: 'blur' }).catch(() => {})"
        />
      </a-form-item>
      <a-form-item label="Activity zone" v-bind="validateInfos.region">
        <a-select v-model:value="modelRef.region" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone one</a-select-option>
          <a-select-option value="beijing">Zone two</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Activity select" v-bind="validateInfos.select">
        <a-select v-model:value="modelRef.select" placeholder="please select your zone">
          <a-select-option value="shanghai">Zone select1</a-select-option>
          <a-select-option value="beijing">Zone select</a-select-option>
        </a-select>
      </a-form-item>
      <a-form-item label="Activity type" v-bind="validateInfos.type">
        <a-checkbox-group v-model:value="modelRef.type">
          <a-checkbox value="1" name="type">Online</a-checkbox>
          <a-checkbox value="2" name="type">Promotion</a-checkbox>
          <a-checkbox value="3" name="type">Offline</a-checkbox>
        </a-checkbox-group>
      </a-form-item>
      <a-form-item :wrapper-col="{ span: 14, offset: 4 }">
        <a-button type="primary" @click="onSubmit">Create</a-button>
        <a-button style="margin-left: 10px;" @click="resetFields">Reset</a-button>
      </a-form-item>
    </a-form>
  </div>
</template>
<script>
import { reactive, toRaw } from "vue";
import { useForm } from "@ant-design-vue/use";
export default {
  setup() {
    const modelRef = reactive({
      name: "",
      region: undefined,
      select: undefined,
      type: undefined
    });
    const rulesRef = reactive({
      name: [
        {
          required: true,
          message: "Please input Activity name"
        },
        {
          min: 3,
          max: 5,
          message: "Length should be 3 to 5",
          trigger: "blur"
        }
      ],
      region: [
        {
          required: true,
          message: "Please select region"
        }
      ],
      select: [
        {
          required: true,
          message: "Please select select"
        }
      ],
      type: [
        {
          required: true,
          message: "Please choose type"
        }
      ]
    });
    const { resetFields, validate, validateInfos } = useForm(
      modelRef,
      rulesRef
    );
    const onSubmit = e => {
      e.preventDefault();
      validate()
        .then(() => {
          console.log(toRaw(modelRef));
        })
        .catch(err => {
          console.log("error", err);
        });
    };
    return {
      labelCol: { span: 4 },
      wrapperCol: { span: 14 },
      validate,
      validateInfos,
      resetFields,
      modelRef,
      onSubmit
    };
  }
};
</script>
<style lang="stylus">
.form-container {
    width: 60%;
}
</style>