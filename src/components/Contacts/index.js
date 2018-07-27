import React from 'react';
import Typography from '../lib/Typography';
import {
  Cards,
  CardsDesc,
  CardsImg
} from '../lib/Cards';

const Contacts = () => {
  return (
    <div>
      <Typography
        variant="title"
        tag="h3" >
        Контакты
      </Typography>

      <div className="Flex Flex_AiFs">
        <Cards>
          <CardsImg>
            <img src="http://vgsha.info/images/stories/podrazdelenie/study/Starkova.jpg" alt="contacts" />
          </CardsImg>
          <CardsDesc>
            <Typography
              variant="text"
              tag="p" >
              Ответственный секретарь приемной комиссии
            </Typography>
            <Typography
              variant="text"
              tag="p" >
              Старкова Дарья Леонидовна
            </Typography>
            <Typography
              variant="text"
              tag="p" >
              кандидат сельскохозяйственных наук, доцент
            </Typography>
          </CardsDesc>
        </Cards>

        <Cards>
          <CardsImg>
            <img src="http://vgsha.info/images/stories/podrazdelenie/study/bydanova_ta.jpg" alt="contacts" />
          </CardsImg>
          <CardsDesc>
            <Typography
              variant="text"
              tag="p" >
              Технический секретарь приемной комиссии
            </Typography>
            <Typography
              variant="text"
              tag="p" >
              Быданова Татьяна Александровна
            </Typography>
          </CardsDesc>
        </Cards>
      </div>

      <Typography
        variant="text"
        tag="p" >
        Кабинет Б-308
      </Typography>
      <Typography
        variant="text"
        tag="p" >
        Телефон (8332) 57-43-21
      </Typography>
      <Typography
        variant="text"
        tag="p" >
        E-mail: priem@vgsha.info
      </Typography>
      <br/>
      <Typography
        variant="text"
        tag="p" >
        Прием абитуриентов и их родителей:
      </Typography>
      <Typography
        variant="text"
        tag="p" >
        08:00 – 17:00, понедельник – пятница
      </Typography>
    </div>
  )
}

export default Contacts;