const colors = {
    primary:'#038C3E',
    secondary:'#025920',
    third:'#BF895A',

    dark:'#333',
    gray:'#aaa',
    light:'#F2F2F2',

    alert:'#6295D9',

    black:'#000',
    white:'#fff',
    transparent: 'transparent',
}

export const theme = {
    colors
}

export type ColorType = keyof typeof colors;