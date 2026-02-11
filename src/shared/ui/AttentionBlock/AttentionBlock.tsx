const AttentionBlock = () => {
  return (
    <div className="border border-[#66a8e8] bg-blue-muted rounded-lg p-2.5">
      <div className="flex items-start gap-2.5">
        <svg className="shrink-0" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.0429 21H3.95707C2.41904 21 1.4566 19.3364 2.22326 18.0031L10.2662 4.01533C11.0352 2.67792 12.9648 2.67791 13.7338 4.01532L21.7768 18.0031C22.5434 19.3364 21.581 21 20.0429 21Z" stroke="#025D95" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 9V13" stroke="#025D95" stroke-width="1.5" stroke-linecap="round"/>
          <path d="M12 17.01L12.01 16.9989" stroke="#025D95" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <div className="flex flex-col gap-2">
          <p className="text-sm text-black-50">
            В настоящее время доставка осуществляется только через <span className="font-semibold italic">самовывоз.</span><br />
            Вы можете забрать заказ самостоятельно из нашего пункта выдачи по адресу: 
          </p>
          <p className="text-sm">
            г. Москва, вн. тер. гор. Муниципальный округ Орехово Борисово Южное, ул. Генерала Белова, д. 26
          </p>
        </div>
      </div>
    </div>
  )
}

export { AttentionBlock }
