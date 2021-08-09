// console.log('axios mock');

const get = (url) => {
  const dataObject = {
    '/questions/17450': {
      product_id: '17450',
      results: [
        {
          question_id: 108407,
          question_body:
            'Voluptatem sequi consequuntur quidem doloremque dignissimos atque quis sit maxime.',
          question_date: '2020-06-19T00:00:00.000Z',
          asker_name: 'Wilhelm65',
          question_helpfulness: 17,
          reported: false,
          answers: {
            1027649: {
              id: 1027649,
              body: 'Eveniet amet iure.',
              date: '2020-02-29T00:00:00.000Z',
              answerer_name: 'Izaiah48',
              helpfulness: 5,
              photos: [],
            },
            1027651: {
              id: 1027651,
              body: 'Enim quas et in blanditiis.',
              date: '2021-01-27T00:00:00.000Z',
              answerer_name: 'Elmer_Crist38',
              helpfulness: 19,
              photos: [
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1525&q=80',
              ],
            },
            1027653: {
              id: 1027653,
              body: 'Omnis harum possimus impedit itaque et rerum sunt eius et.',
              date: '2020-09-24T00:00:00.000Z',
              answerer_name: 'Lisa.Bogan',
              helpfulness: 10,
              photos: [],
            },
            1027654: {
              id: 1027654,
              body: 'Reiciendis cumque nihil voluptatem repellendus.',
              date: '2020-05-03T00:00:00.000Z',
              answerer_name: 'Ellsworth.Cronin',
              helpfulness: 5,
              photos: [],
            },
            1027656: {
              id: 1027656,
              body: 'Molestiae quibusdam consequatur sed vero et quidem perspiciatis eveniet.',
              date: '2020-03-19T00:00:00.000Z',
              answerer_name: 'Wilford_Mayert11',
              helpfulness: 2,
              photos: [],
            },
            1027658: {
              id: 1027658,
              body: 'Id eaque atque occaecati sint non et laborum.',
              date: '2020-03-07T00:00:00.000Z',
              answerer_name: 'Justina_Kerluke5',
              helpfulness: 9,
              photos: [],
            },
            1027659: {
              id: 1027659,
              body: 'Dolore consequuntur temporibus quia itaque eos corporis harum nesciunt.',
              date: '2020-10-07T00:00:00.000Z',
              answerer_name: 'Dillon_Hauck',
              helpfulness: 9,
              photos: [],
            },
            1027663: {
              id: 1027663,
              body: 'Et sit ut ut cum laborum error tenetur earum occaecati.',
              date: '2020-09-15T00:00:00.000Z',
              answerer_name: 'Wilbert.Walker',
              helpfulness: 13,
              photos: [
                'https://images.unsplash.com/photo-1459947727010-6267d2c1232f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
              ],
            },
          },
        },
        {
          question_id: 153423,
          question_body: 'How is the Chicken Sandwich Taco from Taco Bell?',
          question_date: '2021-03-12T00:00:00.000Z',
          asker_name: 'Bajablaustin',
          question_helpfulness: 1,
          reported: false,
          answers: {
            1444144: {
              id: 1444144,
              body: "So gross, don't buy it!",
              date: '2021-03-12T00:00:00.000Z',
              answerer_name: 'notachicken',
              helpfulness: 0,
              photos: [],
            },
            1444145: {
              id: 1444145,
              body: 'Everything from Taco Smell is amazing. However, I do not know what this has to do with the Sherman Cap.',
              date: '2021-03-12T00:00:00.000Z',
              answerer_name: 'Taco Bell man',
              helpfulness: 0,
              photos: [],
            },
          },
        },
        {
          question_id: 153319,
          question_body:
            'Is this Cap in reference to P Sherman 42 Wallaby Way Sydney?',
          question_date: '2021-03-11T00:00:00.000Z',
          asker_name: 'Dory',
          question_helpfulness: 1,
          reported: false,
          answers: {
            1444052: {
              id: 1444052,
              body: 'Uhhhhh, I forgot!',
              date: '2021-03-12T00:00:00.000Z',
              answerer_name: 'Dory',
              helpfulness: 0,
              photos: [],
            },
          },
        },
        {
          question_id: 153424,
          question_body: 'Is this product real Sherman?',
          question_date: '2021-03-12T00:00:00.000Z',
          asker_name: 'James',
          question_helpfulness: 0,
          reported: false,
          answers: {
            1444210: {
              id: 1444210,
              body: 'Yes, directly from Shermanville. ',
              date: '2021-03-12T00:00:00.000Z',
              answerer_name: 'Big Sean',
              helpfulness: 0,
              photos: [],
            },
          },
        },
        {
          question_id: 153318,
          question_body:
            'Indubitably I must say, this cap does indeed make me look like a blathering fool. Shalt I buy it regardless?',
          question_date: '2021-03-11T00:00:00.000Z',
          asker_name: 'Hitherto',
          question_helpfulness: 0,
          reported: false,
          answers: {},
        },
        {
          question_id: 153317,
          question_body: 'What size head does this fit?',
          question_date: '2021-03-11T00:00:00.000Z',
          asker_name: 'Big Head Jones',
          question_helpfulness: 0,
          reported: false,
          answers: {},
        },
        {
          question_id: 153315,
          question_body: 'Does the lucky Charms guy wear this cap?',
          question_date: '2021-03-11T00:00:00.000Z',
          asker_name: 'Curious Cat',
          question_helpfulness: 0,
          reported: false,
          answers: {},
        },
        {
          question_id: 153314,
          question_body: 'Can I wear the Sherman Cap for good luck?',
          question_date: '2021-03-11T00:00:00.000Z',
          asker_name: 'Lucky Leprechaun',
          question_helpfulness: 0,
          reported: false,
          answers: {},
        },
        {
          question_id: 153312,
          question_body: 'What exactly is a Sherman Cap?',
          question_date: '2021-03-11T00:00:00.000Z',
          asker_name: 'Inquisitive Igor',
          question_helpfulness: 0,
          reported: false,
          answers: {},
        },
      ],
    },
    '/products/17450': {
      id: 17450,
      campus: 'hr-rfp',
      name: 'Sherman Cap',
      slogan: 'Officia iure veritatis omnis.',
      description:
        'Est nemo dicta veritatis quibusdam. Voluptatem nisi dolores qui iusto consequuntur rerum. Pariatur est aspernatur eum inventore nostrum cum. Velit porro non ex doloremque consequatur. Harum quas aut tempora quia minus dolor explicabo aliquam voluptas. Quasi dicta sunt.',
      category: 'Cap',
      default_price: '403.00',
      created_at: '2021-02-23T04:22:44.937Z',
      updated_at: '2021-02-23T04:22:44.937Z',
      features: [
        {
          feature: 'Buttons',
          value: '"White Resin"',
        },
        {
          feature: 'Satisfaction Guaranteed',
          value: null,
        },
      ],
    },
    '/products/17450/related': [
      18045, 17171, 17747, 17388, 18068, 17277, 17664,
    ],
    '/reviews/meta/17450': {
      product_id: '17450',
      ratings: {
        1: '6',
        2: '7',
        3: '9',
        4: '11',
        5: '8',
      },
      recommended: {
        false: '6',
        true: '35',
      },
      characteristics: {
        Quality: {
          id: 58466,
          value: '3.2439024390243902',
        },
      },
    },
    '/products/17450/styles': {
      product_id: '17450',
      results: [
        {
          style_id: 92691,
          name: 'White',
          original_price: '403.00',
          sale_price: '59.00',
          'default?': true,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1517438476312-10d79c077509?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            },
          ],
          skus: {
            535936: {
              quantity: 40,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92692,
          name: 'Maroon',
          original_price: '553.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1560072810-1cffb09faf0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          skus: {
            535937: {
              quantity: 35,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92693,
          name: 'Plum',
          original_price: '403.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1512521952190-7e1a47820ff4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1560857792-215f9e3534ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            },
          ],
          skus: {
            535938: {
              quantity: 3,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92694,
          name: 'Red',
          original_price: '403.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1510217167326-549ae78e4738?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          skus: {
            535939: {
              quantity: 45,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92695,
          name: 'Pink',
          original_price: '403.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1544376664-80b17f09d399?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1534011546717-407bced4d25c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80',
            },
          ],
          skus: {
            535940: {
              quantity: 45,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92696,
          name: 'Maroon',
          original_price: '403.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1553830591-d8632a99e6ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1513531926349-466f15ec8cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          skus: {
            535941: {
              quantity: 25,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92697,
          name: 'Turquoise',
          original_price: '403.00',
          sale_price: '67.00',
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1534550017194-5df79ed78967?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1519098635131-4c8f806d1e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          skus: {
            535942: {
              quantity: 55,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92698,
          name: 'Cyan',
          original_price: '403.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1519862170344-6cd5e49cb996?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1530821875964-91927b611bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80',
            },
          ],
          skus: {
            535943: {
              quantity: 57,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92699,
          name: 'Silver',
          original_price: '403.00',
          sale_price: '185.00',
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1558422504-3d17542c1799?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1519857609704-61e751edba25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80',
            },
          ],
          skus: {
            535944: {
              quantity: 22,
              size: 'One Size',
            },
          },
        },
        {
          style_id: 92700,
          name: 'Turquoise',
          original_price: '403.00',
          sale_price: null,
          'default?': false,
          photos: [
            {
              thumbnail_url:
                'https://images.unsplash.com/photo-1457968867385-9f877f3f2bce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=300&q=80',
              url: 'https://images.unsplash.com/photo-1562542082-519ebcdb43e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2057&q=80',
            },
          ],
          skus: {
            535945: {
              quantity: 13,
              size: 'One Size',
            },
          },
        },
      ],
    },
  };
  let response = dataObject[url];
  return Promise.resolve({ data: response });
};

exports.get = get;
