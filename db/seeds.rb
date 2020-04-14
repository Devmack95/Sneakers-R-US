# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create!(username: 'admin', email:'devon.mccalmon@yahoo.com', password: 'admin1')
Sneaker.destroy_all
Accessory.destroy_all

Sneaker.create!(brand: 'Adidas', name: "Yeezy Boost 350 V2 'Black Non-Reflective'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/022/234/263/original/505488_01.jpg.jpeg?1559847643', price: 420, user_id: '1')
Sneaker.create!(brand: 'Adidas', name: "Yeezy Boost 350 V2 'Cloud White Non-Reflective'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/025/377/609/original/529368_01.jpg.jpeg?1567193788', price: 315, user_id: '1')
Sneaker.create!(brand: 'Adidas', name: "Yeezy Boost '700 Wave Runner'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/014/507/858/original/195483_01.jpg.jpeg?1536271278', price: 395, user_id: '1')
Sneaker.create!(brand: 'Adidas', name: "Yeezy Boost 700 'Inertia'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/019/367/696/original/479750_01.jpg.jpeg?1551816124', price: 360, user_id: '1')
Sneaker.create!(brand: 'Adidas', name: "Air Yeezy 2 SP 'Red October'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/008/486/600/original/12130_01.jpg.jpeg?1513114763', price: 9800, user_id: '1')
Sneaker.create!(brand: 'Pharrell x Adidas', name: "NMD Human Race 'Friends & Family'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/2200/attachments/product_template_additional_pictures/images/024/614/950/original/89845_08.jpg.jpeg?1565636426', price: 6650, user_id: '1')
Sneaker.create!(brand: 'Pharrell x Adidas', name: "NMD Human Race Trail 'Respira' Friends and Family", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_pictures/images/013/768/283/original/AC7187.png.png', price: 9100, user_id: '1')
Sneaker.create!(brand: 'Pharrell x Adidas', name: "NMD Human Race Trail 'Friends and Family'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/023/313/275/original/461677_08.jpg.jpeg?1562613853', price: 4990, user_id: '1')
Sneaker.create!(brand: 'Undefeated x Air Jordan', name: "Retro 4", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/023/644/347/original/16458_08.jpg.jpeg?1563400970', price: 23000, user_id: '1')
Sneaker.create!(brand: 'OFF-WHITE x Air Jordan', name: "Retro 1 High OG 'Chicago'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/008/487/309/original/136666_08.jpg.jpeg?1513115122', price: 3270, user_id: '1')
Sneaker.create!(brand: 'OFF-WHITE x Air VaporMax', name: "The Ten", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/008/488/107/original/147583_08.jpg.jpeg?1513115618', price: 895, user_id: '1')
Sneaker.create!(brand:'Air Jordan', name: "Retro 1 High OG 'Court Purple 2.0'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/034/848/552/original/517360_01.jpg.jpeg?1585590009', price: 225, user_id: '1')
Sneaker.create!(brand:'OFF-WHITE x Air Max', name: "90 'Black'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/017/763/491/original/466439_01.jpg.jpeg?1547150496', price: 520, user_id: '1')
Sneaker.create!(brand:'OFF-WHITE x Air Max', name: "90 'Desert Ore'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/017/794/463/original/394710_01.jpg.jpeg?1547236891', price: 510, user_id: '1')
Sneaker.create!(brand:'Air Fear Of God', name: "1 'The Atmosphere'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_additional_pictures/images/024/154/565/original/497650_01.jpg.jpeg?1564600373', price: 915, user_id: '1')
Sneaker.create!(brand:'Balenciaga Speed Trainer', name: "Mid 'Logo Print'", description: 'Brand New, Size: 11.5', image: 'https://image.goat.com/crop/750/attachments/product_template_pictures/images/012/727/710/original/506336_W0650_1006.png.png', price: 675, user_id: '1')

p "#{Sneaker.count} sneakers we're created"

Accessory.create!(name: 'WHITE 3M ROPE LACES V.2', description: '3m reflective rope laces', image: 'https://cdn.shopify.com/s/files/1/0181/6491/products/new_white_3m_rope_pi_1080x.jpg?v=1570475741', price: 10, user_id: '1')
Accessory.create!(name: 'BLACK 3M ROPE LACES V.2', description: '3m reflective rope laces', image: 'https://cdn.shopify.com/s/files/1/0181/6491/products/new_black_3m_rope_pi_1080x.jpg?v=1570475801', price: 10, user_id: '1')
Accessory.create!(name: 'HUMAN RACE ROPE LACES', description: 'Designed as an alternative black and white rope lace', image: 'https://cdn.shopify.com/s/files/1/0181/6491/products/human_race_rope_v2_pi_1080x.jpg?v=1570475658', price: 7, user_id: '1')
Accessory.create!(name: 'BLACK GOLD THREAD ROPE LACES', description: 'Designed to stand out, our metallic gold thread design makes any shoe pop and draws attention to your kicks.', image: 'https://cdn.shopify.com/s/files/1/0181/6491/products/black_gold_thread_rope_product_image_1080x.jpg?v=1567626516', price: 7, user_id: '1')
Accessory.create!(name: 'BLACK GOLD ROPE LACES', description: 'Our classic black rope laces upgraded with gold plated metal aglets.', image: 'https://cdn.shopify.com/s/files/1/0181/6491/products/black_gold_rope_product_image_cfa4eafa-9694-4387-a45b-9a76508510a4_1080x.jpg?v=1518543799', price: 7, user_id: '1')
Accessory.create!(name: 'BLACK/ORANGE - BACKPACK', description: 'TSA COMPLIANT (CARRY-ON APPROVED), holds up to 3 pairs of shoes ', image: 'https://cdn.shopify.com/s/files/1/1421/8996/products/BO-BP_1024x1024.jpg?v=1551835685', price: 109, user_id: '1')
Accessory.create!(name: 'Giant 16pair Shoe Box', description: 'Boxes can be made to fit 16 pairs of shoes.', image: 'https://i.etsystatic.com/11695941/r/il/f8c13e/1279443361/il_794xN.1279443361_95jh.jpg', price: 620, user_id: '1')
Accessory.create!(name: 'Large Drop-Front Shoe Box', description: 'The clear window of our Drop-Front Shoe Box lets you immediately see the pair stored inside.', image: 'https://cdn-fsly.yottaa.net/55df7e1a2bb0ac7d800040c2/ecdf7130ef10013390340a3ba3fac80a.yottaa.net/v~4b.fd/catalogimages/301960/10048827Shoe-Box-Mens-DropFront-Tran.jpg?width=1200&height=1200&align=center&yocs=2C_4c_2E_2H_', price: 10, user_id: '1')
Accessory.create!(name: 'Jason Markk Essential Kit', description: 'signature kit which includes a 4 oz. bottle of our Premium Shoe Cleaning solution and Standard Brush. The perfect pairing to get you started or to maintain your cleaning fix.', image: 'https://cdn.shopify.com/s/files/1/0070/3633/8260/products/jm_products_essential_kit_f8c8b29c-a6ff-4458-a3bc-38841f26fa11_1080x.jpg?v=1583280202', price: 16, user_id: '1')
Accessory.create!(name: 'The Combo Pack Sneaker Shield', description: 'Never crease sneaker technology', image: 'https://www.sneakershields.com/wp-content/uploads/2016/11/combo.jpg', price: 34, user_id: '1')
Accessory.create!(name: 'JASON MARKK TRAVEL SHOE CLEANING KIT', description: 'The perfect kit to take on the go. Meets TSA Requirements', image: 'https://i.imgur.com/pSqd71V.png', price: 19.95, user_id: '1')

p "#{Accessory.count} accessroies we're created"