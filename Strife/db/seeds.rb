# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Server.destroy_all
ServerMembership.destroy_all
Channel.destroy_all
ChannelMembership.destroy_all
Message.destroy_all
# Friendship.destroy_all
# DmServer.destroy_all
# DmMember.destroy_all
# DmMessage.destroy_all



#Strife Bot - mr.wumpus
mr_Wumpus = User.create!(
    username: 'Mr.Wumpus',
    email: 'wumbo@strife.com',
    birthday: Date.new(1996,02,25),
    password: 'wumboing',
    color_tag: 6,
    strife_id_tag:0001
)

# demo user 1
demouser1=User.create!(
    username: 'DemoUser1',
    email: 'DemoUser1@strife.com',
    birthday: Date.new(1996,02,25),
    password: 'qwerty1234',
)

# demo user 2
demouser2=User.create!(
    username: 'DemoUser2',
    email: 'DemoUser2@strife.com',
    password: 'QWERTY1234',
    birthday: Date.new(1997,03,10),
)

stacy=User.create!(
    username: 'stacy',
    email: 'Demo56@strife.com',
    password: 'QWERTY1234',
    birthday: Date.new(1990,03,10),
)

defaultServer = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "defaultServer",
    public: true

)

defaultServerChannel = Channel.create!(channel_name: "not_general" , server_id: defaultServer.id)


spencer = User.create(
    email: "Iascone.com",
    username: "Iascone",
    password: "great TA",
    birthday: Date.new(1990,03,10),
)

ayce = User.create(
  email: "ayce@aa.com",
  username: "Ayce machine",
  password: "12348hello",
  birthday: Date.new(1990,03,10),
)

jwong = User.create(
    email: "@hhl.com",
    username: "Jwong",
    password: "Dance dance revolution",
    birthday: Date.new(1990,03,10),
)

kinKa = User.create!(username: "burgerkinka", email: "kinka@kinka.com", password: "123456789", birthday: Date.new(1990,03,10),)

kinKaServer = Server.create!(
    server_owner_id: kinKa.id,
    server_name: "Kin Ka Attendance",
    public: true

)
ayceServer = Server.create!(
    server_owner_id: ayce.id,
    server_name: "ayce Attendance", 
    public: true

)




Server1 = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "Server1", 
    public: true

)
Server2 = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "Server2", 
    public: true

)
Server3 = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "Server3", 
    public: true

)
Server4 = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "Server4", 
    public: true

)
Server5 = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "Server5", 
    public: true

)
Server6 = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "Server6", 
    public: true

)
Server7 = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "Server7", 
    public: true

)














demoChannel = Channel.create!(channel_name: "Demo Channel", server_id: defaultServer.id)
kinKaCircle = Channel.create!(channel_name: "Kin Ka's Circle", server_id: kinKaServer.id)
ayceCircle = Channel.create!(channel_name: "Ayce's Circle", server_id: ayceServer.id)


ServerMembership.create(server_id: ayceServer.id , user_id: demouser1.id)
ServerMembership.create(server_id: ayceServer.id , user_id: demouser2.id)
ServerMembership.create(server_id: ayceServer.id , user_id: kinKa.id)
ServerMembership.create(server_id: ayceServer.id , user_id: spencer.id)
ServerMembership.create(server_id: ayceServer.id , user_id: stacy.id)

Message.create(channel_id: ayceServer.id, author_id:demouser1.id, body: "hello?")
Message.create(channel_id: ayceServer.id, author_id: demouser2.id, body: "hell0!")



dm_server_1 = DmServer.create!( owner_id: demouser1.id )
dm_server_2 = DmServer.create!( owner_id: demouser1.id)
dm_server_3 = DmServer.create!( owner_id: demouser1.id )


dm_membership_1 = DmMember.create!( dm_server_id: dm_server_1.id, dm_member_id: demouser1.id )
dm_membership_2 = DmMember.create!( dm_server_id: dm_server_1.id, dm_member_id: demouser2.id)
dm_membership_3 = DmMember.create!( dm_server_id: dm_server_2.id, dm_member_id: demouser1.id )
dm_membership_4 = DmMember.create!( dm_server_id: dm_server_2.id, dm_member_id: stacy.id )
dm_membership_5 = DmMember.create!( dm_server_id: dm_server_3.id, dm_member_id: demouser1.id )
dm_membership_6 = DmMember.create!( dm_server_id: dm_server_3.id, dm_member_id: ayce.id )

DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser2.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser2.id, body:"Congrats!" )

DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: stacy.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: stacy.id, body:"Congrats!" )

DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: ayce.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: ayce.id, body:"Congrats!" )

