module.exports = {
    privateKey: '', // 本地私钥地址，位置一般在C:/Users/xxx/.ssh/id_rsa，非必填，有私钥则配置
    passphrase: '', // 本地私钥密码，非必填，有私钥则配置
    projectName: '', // 项目名称
    // 根据需要进行配置，如只需部署prod线上环境，请删除dev测试环境配置，反之亦然，支持多环境部署
    dev: { // 测试环境
      name: '测试环境',
      script: "npm run build", // 测试环境打包脚本
      host: '', // 测试服务器地址
      port: 22, // ssh port，一般默认22
      username: '', // 登录服务器用户名
      password: '', // 登录服务器密码
      distPath: 'dist',  // 本地打包dist目录
      webDir: '',  // // 测试环境服务器地址
    },
    prod: {  // 线上环境
      name: '线上环境',
      script: "npm run build", // 线上环境打包脚本
      host: '', // 线上服务器地址
      port: 22, // ssh port，一般默认22
      username: '', // 登录服务器用户名
      password: '', // 登录服务器密码
      distPath: 'dist',  // 本地打包dist目录
      webDir: '' // 线上环境web目录
    }
    // 再还有多余的环境按照这个格式写即可
  }
  