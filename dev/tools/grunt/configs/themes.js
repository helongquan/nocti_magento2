/**
 * Copyright © 2013-2017 Magento, Inc. All rights reserved.
 * See COPYING.txt for license details.
 */

'use strict';

/**
 * Define Themes
 *
 * area: area, one of (frontend|adminhtml|doc),
 * name: theme name in format Vendor/theme-name,
 * locale: locale,
 * files: [
 * 'css/styles-m',
 * 'css/styles-l'
 * ],
 * dsl: dynamic stylesheet language (less|sass)
 *
 */
module.exports = {
    blank: {
        area: 'frontend',
        name: 'Magento/blank',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l',
            'css/email',
            'css/email-inline'
        ],
        dsl: 'less'
    },
    luma: {
        area: 'frontend',
        name: 'Magento/luma',
        locale: 'en_US',
        files: [
            'css/styles-m',
            'css/styles-l'
        ],
        dsl: 'less'
    },
    backend: {
        area: 'adminhtml',
        name: 'Magento/backend',
        locale: 'en_US',
        files: [
            'css/styles-old',
            'css/styles'
        ],
        dsl: 'less'
    }
    // 修改语言，把英文的注释掉，变成汉语
    // blank: {
    //     area: 'frontend',
    //     name: 'Magento/blank',
    //     locale: 'zh_Hans_CN',
    //     files: [
    //         'css/styles-m',
    //         'css/styles-l',
    //         'css/email',
    //         'css/email-inline'
    //     ],
    //     dsl: 'less'
    // },
    // luma: {
    //     area: 'frontend',
    //     name: 'Magento/luma',
    //     locale: 'zh_Hans_CN',
    //     files: [
    //         'css/styles-m',
    //         'css/styles-l'
    //     ],
    //     dsl: 'less'
    // },
    // backend: {
    //     area: 'adminhtml',
    //     name: 'Magento/backend',
    //     locale: 'zh_Hans_CN',
    //     files: [
    //         'css/styles-old',
    //         'css/styles'
    //     ],
    //     dsl: 'less'
    // }
};
