/*
 *    Copyright (c) 2018-2025, lengleng All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice,
 * this list of conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright
 * notice, this list of conditions and the following disclaimer in the
 * documentation and/or other materials provided with the distribution.
 * Neither the name of the pig4cloud.com developer nor the names of its
 * contributors may be used to endorse or promote products derived from
 * this software without specific prior written permission.
 * Author: lengleng (wangiegie@gmail.com)
 */

import request from '@/router/axios'

export function pageUser (query) {
  return request({
    url: '/admin/sys/user/',
    method: 'get',
    params: query
  })
}

export function saveUser (obj) {
  return request({
    url: '/admin/sys/user/',
    method: 'post',
    data: obj
  })
}

export function findUser (id) {
  return request({
    url: '/admin/sys/user/' + id,
    method: 'get'
  })
}

export function removeUser (id) {
  return request({
    url: '/admin/sys/user/' + id,
    method: 'delete'
  })
}

export function lockUser (id) {
  return request({
    url: '/admin/sys/user/'+id,
    method: 'put'
  })
}
