

//ellipses is croped sentence which is represented by ...

export const addEllipsis = (text) => {
    if(text && text.length > 30){
        return text.substring(0,30) + '...'
    }
    return text
}