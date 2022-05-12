const formatValue = (value)=>{
    const result = Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(value)

    return result

}

export default formatValue