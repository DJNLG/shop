/**
 * 调用接口数据
 * */
import fetch from '../config/fetch'
export const getList = r => fetch('', {r})
export const getImgCode = () => fetch('/v1/captchas', {}, 'POST')
