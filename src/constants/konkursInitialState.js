export const konkursInitialState = {
  konkurs: [],
  grad: [
    "Бакалавриат",
    "Магистратура",
    "Специалитет",
    "СПО"
  ],
  dataGrad: [
    {
      graduation: "Бакалавриат",
      facultet: [
        {
          name: "Агрономический",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Бюджет",
                  file: "bak-agro-o-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "bak-agro-o-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Бюджет",
                  file: "bak-agro-z-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "bak-agro-z-vb.json"
                }
              ]
            }
          ]
        },
        {
          name: "Биологический",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Бюджет",
                  file: "bak-bio-o-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "bak-bio-o-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Бюджет",
                  file: "bak-bio-z-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "bak-bio-z-vb.json"
                }
              ]
            }
          ]
        },
        {
          name: "Ветеринарной медицины",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Внебюджет",
                  file: "bak-vet-o-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Внебюджет",
                  file: "bak-vet-z-vb.json"
                }
              ]
            }
          ]
        },
        {
          name: "Инженерный",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Бюджет",
                  file: "bak-ing-o-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "bak-ing-o-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Бюджет",
                  file: "bak-ing-z-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "bak-ing-z-vb.json"
                }
              ]
            }
          ]
        },
        {
          name: "Экономический",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Внебюджет",
                  file: "bak-eco-o-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Внебюджет",
                  file: "bak-eco-z-vb.json"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      graduation: "Магистратура",
      facultet: [
        {
          name: "Агрономический",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Бюджет",
                  file: "mag-agro-o-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "mag-agro-o-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Бюджет",
                  file: "mag-agro-z-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "mag-agro-z-vb.json"
                }
              ]
            }
          ]
        },
        {
          name: "Биологический",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Бюджет",
                  file: "mag-bio-o-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "mag-bio-o-vb.json"
                }
              ]
            }
          ]
        },
        {
          name: "Инженерный",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Бюджет",
                  file: "mag-ing-o-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "mag-ing-o-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Бюджет",
                  file: "mag-ing-z-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "mag-ing-z-vb.json"
                }
              ]
            }
          ]
        },
        {
          name: "Экономический",
          forma: [
            {
              name: "Очно-заочная",
              price: [
                {
                  name: "Внебюджет",
                  file: "mag-eco-oz-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Внебюджет",
                  file: "mag-eco-z-vb.json"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      graduation: "Специалитет",
      facultet: [
        {
          name: "Ветеринарной медицины",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Бюджет",
                  file: "spec-vet-o-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "spec-vet-o-vb.json"
                }
              ]
            },
            {
              name: "Очно-заочная",
              price: [
                {
                  name: "Бюджет",
                  file: "spec-vet-oz-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "spec-vet-oz-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Бюджет",
                  file: "spec-vet-z-b.json"
                },
                {
                  name: "Внебюджет",
                  file: "spec-vet-z-vb.json"
                }
              ]
            }
          ]
        }
      ]
    },
    {
      graduation: "СПО",
      facultet: [
        {
          name: "СПО",
          forma: [
            {
              name: "Очная",
              price: [
                {
                  name: "Внебюджет",
                  file: "spo-o-vb.json"
                }
              ]
            },
            {
              name: "Заочная",
              price: [
                {
                  name: "Внебюджет",
                  file: "spo-z-vb.json"
                }
              ]
            }
          ]
        }
      ]
    }
  ],
  currFacsSnapshot: [],
  currFormsSnapshot: [],
  currBaseSnapshot: [],
  currGrad: "",
  currFacs: [],
  currForms: [],
  currBase: [],
  currList: "",
  isLoading: false
};