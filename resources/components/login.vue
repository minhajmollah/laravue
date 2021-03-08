<template>
 <div style=" padding: 5% 25%;">
<a-card style="width: 600px;background:#e2e8f0;" >
  <a-form-model ref="ruleForm" :model="ruleForm" :rules="rules" v-bind="layout">
  <a-form-model-item has-feedback label="name" prop="name">
      <a-input v-model="ruleForm.name" type="text" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="email" prop="email">
      <a-input v-model="ruleForm.email" type="email" autocomplete="off" />
    </a-form-model-item>
    <a-form-model-item has-feedback label="password" prop="password">
      <a-input v-model="ruleForm.password" type="password" autocomplete="off" />
    </a-form-model-item>

    <a-form-model-item :wrapper-col="{ span: 14, offset: 4 }">
      <a-button type="primary" @click="submitForm('ruleForm')">
        Submit
      </a-button>
 <a-button style="margin-left: 10px" @click="resetForm('ruleForm')">
        Reset
      </a-button>
    
  <a-button type="primary" style="margin-left:10px;">
             <router-link to="/login" exact>login
      </router-link>
    </a-button>
    </a-form-model-item>
  </a-form-model>
 </a-card>
 </div>
</template>
<script>
import axios  from 'axios'
export default {
  data() {
    let checkPending;
    let checkAge = (rule, value, callback) => {
      clearTimeout(checkPending);
      if (!value) {
        return callback(new Error('Please input the age'));
      }
      checkPending = setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error('Please input digits'));
        } else {
          if (value < 18) {
            callback(new Error('Age must be greater than 18'));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    let validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the email'));
      } else {
        if (this.ruleForm.email !== '') {
          this.$refs.ruleForm.validateField('email');
        }
        callback();
      }
    };
    let validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the password '));
      } 
        
       else {
        callback();
      }
    };
   let validatePass3 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('Please input the name '));
      } 
        
       else {
        callback();
      }
    };
    return {
      ruleForm: {
        email: '',
        password: '',
        name:'',
    
      },
      rules: {
        email: [{ validator: validatePass, trigger: 'change' }],
        password: [{ validator: validatePass2, trigger: 'change' }],
       name: [{ validator: validatePass3, trigger: 'change' }],
    
      },
      layout: {
        labelCol: { span: 4 },
        wrapperCol: { span: 14 },
      },
    };
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
       axios.post('/register',{
name:this.ruleForm.name,
email:this.ruleForm.email,
password:this.ruleForm.password,

})
.then(response=>{
if(response.data.access_token){
localStorage.setItem('AToken',response.data.access_token);
this.$router.push('/dashboard')
}

})
.then(function(error){
console.log(error)
});
         
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
};
</script>
