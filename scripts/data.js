"use strict";

var creeper = [
    '#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677',

    '#7cd677',   null  ,   null  ,'#7cd677','#7cd677',   null  ,   null  ,'#7cd677',

    '#7cd677',   null  ,   null  ,'#7cd677','#7cd677',   null  ,   null  ,'#7cd677',

    '#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677',

    '#7cd677','#7cd677','#7cd677',   null  ,   null  ,'#7cd677','#7cd677','#7cd677',

    '#7cd677','#7cd677',   null  ,   null  ,   null  ,   null  ,'#7cd677','#7cd677',

    '#7cd677','#7cd677',   null  ,'#7cd677','#7cd677',   null  ,'#7cd677','#7cd677',
    
    '#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677','#7cd677'
];

var face = [
    '#7142f4','#7142f4',   null  ,   null  ,   null  ,   null  ,'#7142f4','#7142f4',

    '#7142f4',   null  ,'#7142f4','#7142f4','#7142f4','#7142f4',   null  ,'#7142f4',

       null  ,'#7142f4',   null  ,'#7142f4','#7142f4',   null  ,'#7142f4',   null  ,

       null  ,'#7142f4','#7142f4','#7142f4','#7142f4','#7142f4','#7142f4',   null  ,

       null  ,'#7142f4',   null  ,'#7142f4','#7142f4',   null  ,'#7142f4',   null  ,

       null  ,'#7142f4','#7142f4',   null  ,   null  ,'#7142f4','#7142f4',   null  ,

    '#7142f4',   null  ,'#7142f4','#7142f4','#7142f4','#7142f4',   null  ,'#7142f4',

    '#7142f4','#7142f4',   null  ,   null  ,   null  ,   null  ,'#7142f4','#7142f4'
];

var rex = [
       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,

       null  ,   null  ,   null  ,'#f4d03f','#f4d03f',   null  ,   null  ,   null  ,

    '#ff6600',   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,'#ff9f5f',

    '#ff6600','#ff6600',   null  ,'#ff6600','#ff9f5f',   null  ,'#ff9f5f','#ff9f5f',

    '#ff6600','#ff6600','#ff6600','#ff6600','#ff9f5f','#ff9f5f','#ff9f5f','#ff9f5f',

       null  ,'#ff6600','#ff6600','#ff6600','#ff9f5f','#ff9f5f','#ff9f5f',   null  ,

       null  ,   null  ,   null  ,'#ff6600','#ff9f5f',   null  ,   null  ,   null  ,

    '#595959','#595959',   null  ,'#595959','#595959',   null  ,'#595959','#595959'
];

var blank = [
       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,

       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,

       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,

       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,

       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,

       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,

       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,

       null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  ,   null  
];

var insight = [
    '#2558aa','#2558aa','#2558aa' ,'#2558aa','#2558aa','#2558aa','#2558aa','#2558aa',

    '#2558aa','#dedede','#dedede','#dedede','#2558aa','#2558aa','#2558aa','#2558aa',

    '#2558aa','#dedede','#2558aa','#dedede','#2558aa','#2558aa','#2558aa','#2558aa',

    '#2558aa','#dedede','#dedede','#dedede','#2558aa','#2558aa','#2558aa','#2558aa',

    '#2558aa','#2558aa','#dedede','#2558aa','#dedede','#dedede','#dedede','#2558aa',

    '#2558aa','#2558aa','#dedede','#2558aa','#dedede','#2558aa','#dedede','#2558aa',

    '#2558aa','#2558aa','#dedede','#2558aa','#dedede','#2558aa','#dedede','#2558aa',

    '#2558aa','#2558aa','#2558aa','#2558aa','#2558aa','#2558aa','#2558aa','#2558aa'
];

var insightd = [
    '#434343','#434343','#434343' ,'#434343','#434343','#434343','#434343','#434343',

    '#434343','#2558aa','#2558aa','#2558aa','#434343','#434343','#434343','#434343',

    '#434343','#2558aa','#434343','#2558aa','#434343','#434343','#434343','#434343',

    '#434343','#2558aa','#2558aa','#2558aa','#434343','#434343','#434343','#434343',

    '#434343','#434343','#2558aa','#434343','#2558aa','#2558aa','#2558aa','#434343',

    '#434343','#434343','#2558aa','#434343','#2558aa','#434343','#2558aa','#434343',

    '#434343','#434343','#2558aa','#434343','#2558aa','#434343','#2558aa','#434343',

    '#434343','#434343','#434343','#434343','#434343','#434343','#434343','#434343'
];

var accello = [
    '#595959','#595959','#595959',   null  ,   null  ,   null  ,   null  ,   null  ,

    '#595959','#7142f4','#595959','#7142f4',   null  ,   null  ,   null  ,   null  ,

    '#595959','#595959','#595959','#7142f4','#7142f4',   null  ,   null  ,   null  ,

    '#595959','#7142f4',   null  ,   null  ,'#7142f4',   null  ,   null  ,   null  ,

    '#595959','#7142f4',   null  ,   null  ,'#7142f4','#7142f4',   null  ,   null  ,

    '#595959','#7142f4',   null  ,   null  ,   null  ,'#7142f4','#595959','#595959',

    '#595959','#7142f4',   null  ,   null  ,   null  ,'#7142f4','#434343',   null  ,

    '#434343','#434343','#434343',   null  ,   null  ,   null  ,'#595959','#595959'
];