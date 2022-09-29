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
Friendship.destroy_all
DmServer.destroy_all
DmMember.destroy_all
DmMessage.destroy_all



#Strife Bot - mr.wumpus

mr_Wumpus = User.create!(
    username: 'Mr.Wumpus',
    email: 'wumbo@strife.com',
    birthday: Date.new(1996,02,25),
    password: 'wumboing',
    color_tag: 10,
    strife_id_tag:0001,
    online: true
)
mr_Wumpus.photo.attach(io: File.open('app/assets/images/discord_Strife_logo.png'), filename:'discord_Strife_logo.png')

StrifeMainServer = Server.create!(
    server_owner_id: mr_Wumpus.id,
    server_name: "Welcome to Strife", 
    public: true
)

StrifeMainServer.server_Icon.attach(io: File.open('app/assets/images/loading.gif'), filename: 'loading.gif')
ServerMembership.create(server_id: StrifeMainServer.id , user_id: mr_Wumpus.id)

# demo user 1
demouser1=User.create!(
    username: 'DemoUser1',
    email: 'DemoUser1@strife.com',
    birthday: Date.new(1996,02,25),
    password: 'qwerty1234',
    phone_number:"+17185557894"

)
demouser1.photo.attach(io: File.open('app/assets/images/loading.gif'), filename: 'loading.gif')
# demo user 2
demouser2=User.create!(
    username: 'DemoUser2',
    email: 'DemoUser2@strife.com',
    password: 'QWERTY1234',
    birthday: Date.new(1997,03,10),
    phone_number:"+17185557890"
)

stacy=User.create!(
    username: 'stacy',
    email: 'Demo56@strife.com',
    password: 'QWERTY1234',
    birthday: Date.new(1990,03,10),
    phone_number:"+17185557891"

)

defaultServer = Server.create!(
    server_owner_id: demouser1.id,
    server_name: "defaultServer",
    public: true

)

defaultServerChannel = Channel.create!(channel_name: "not_general" , server_id: defaultServer.id , channel_type:1)
defaultServerChannel = Channel.create!(channel_name: "general-voice Chat" , server_id: defaultServer.id , channel_type:2)



spencer = User.create(
    email: "Iascone@aa.com",
    username: "Iascone",
    password: "great TA",
    birthday: Date.new(1990,03,10),
    phone_number:"+17185557892"

)

ayce = User.create(
  email: "ayce@aa.com",
  username: "Ayce machine",
  password: "12348hello",
  birthday: Date.new(1990,03,10),
  phone_number:"+17185557893"

)

jwong = User.create(
    email: "jwong@hhl.com",
    username: "Jwong",
    password: "Dancedancerevolution",
    birthday: Date.new(1990,03,10),
    phone_number:"+17185557896"

)

kinKa = User.create!(
    username: "burgerkinka", 
    email: "kinka@kinka.com", 
    password: "123456789", 
    birthday: Date.new(1990,03,10),
    phone_number:"+17185557897"

)


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






demoChannel = Channel.create!(channel_name: "Demo Channel", server_id: defaultServer.id, channel_type:1)
kinKaCircle = Channel.create!(channel_name: "Kin Ka's Circle", server_id: kinKaServer.id, channel_type:1)
ayceCircle = Channel.create!(channel_name: "Ayce's Circle", server_id: ayceServer.id, channel_type:1)


ServerMembership.create(server_id: ayceServer.id , user_id: demouser1.id)
ServerMembership.create(server_id: ayceServer.id , user_id: demouser2.id)
ServerMembership.create(server_id: ayceServer.id , user_id: kinKa.id)
ServerMembership.create(server_id: ayceServer.id , user_id: spencer.id)
ServerMembership.create(server_id: ayceServer.id , user_id: stacy.id)

Message.create(channel_id: ayceCircle.id, author_id:demouser1.id, body: "hello?")
Message.create(channel_id: ayceCircle.id, author_id: demouser2.id, body: "hell0!")
Message.create(channel_id: ayceCircle.id, author_id:demouser1.id, body: "hello?")
Message.create(channel_id: ayceCircle.id, author_id: demouser2.id, body: "hell0!")
Message.create(channel_id: ayceCircle.id, author_id:demouser1.id, body: "hello?")
Message.create(channel_id: ayceCircle.id, author_id: demouser2.id, body: "hell0!")
Message.create(channel_id: ayceCircle.id, author_id: ayce.id, body: "attendance time!")
Message.create(channel_id: ayceCircle.id, author_id: kinKa.id, body: "demo!?")

dm_server_1 = DmServer.create!( owner_id: demouser1.id )
dm_server_2 = DmServer.create!( owner_id: demouser1.id)
dm_server_3 = DmServer.create!( owner_id: demouser1.id )


dm_membership_1 = DmMember.create!( dm_server_id: dm_server_1.id, dm_member_id: demouser1.id )
dm_membership_2 = DmMember.create!( dm_server_id: dm_server_1.id, dm_member_id: demouser2.id)
dm_membership_3 = DmMember.create!( dm_server_id: dm_server_2.id, dm_member_id: demouser1.id )
dm_membership_4 = DmMember.create!( dm_server_id: dm_server_2.id, dm_member_id: stacy.id )
dm_membership_5 = DmMember.create!( dm_server_id: dm_server_3.id, dm_member_id: demouser1.id )
dm_membership_6 = DmMember.create!( dm_server_id: dm_server_3.id, dm_member_id: ayce.id )


DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: mr_Wumpus.id, body:"This is the beginning of your direct message history with" )
DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser2.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser2.id, body:"Congrats!" )

DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: mr_Wumpus.id, body:"This is the beginning of your direct message history with" )
DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: stacy.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: dm_server_2.id, sender_id: stacy.id, body:"Congrats!" )

DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: mr_Wumpus.id, body:"This is the beginning of your direct message history with" )
DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: ayce.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: dm_server_3.id, sender_id: ayce.id, body:"Congrats!" )



spamUser1 =User.create!(
    username: "spamuser@gmail.com", 
    email: "spamuser@gmail.com", 
    password: "spamuser@gmail.com", 
    birthday: Date.new(1990,03,10),
    phone_number:"+17185657894"

)

spamUser2 =User.create!(
    username: "spamuser1@gmail.com", 
    email: "spamuser1@gmail.com",
    password: "spamuser1@gmail.com",
    birthday: Date.new(1990,03,10),
    phone_number:"+17185527894"

)
test1=User.create!(
    username: 'Test1@1.com',
    email: 'Test1@1.com',
    birthday: Date.new(1996,02,25),
    password: 'Test1@1.com',
    phone_number:"+17185527894"
)

test2=User.create!(
    username: "test1@g.com",
    email: "test1@g.com",
    birthday: Date.new(1996,02,25),
    password: "test1@g.com",
    phone_number:"+17185527894"
)


test3=User.create!(
    username: "testuser1234@gmail.com",
    email: "testuser1234@gmail.com",
    birthday: Date.new(1996,02,25),
    password: "testuser1234@gmail.com",
    phone_number:"+17185527894"
)


test4=User.create!(
    username: "testuser12345@gmail.com",
    email: "testuser12345@gmail.com",
    birthday: Date.new(1996,02,25),
    password: "testuser12345@gmail.com",
    phone_number:"+17185527894"
)

dm_server_4 = DmServer.create!( owner_id: demouser1.id )
dm_server_5 = DmServer.create!( owner_id: demouser1.id )
dm_membership_7 = DmMember.create!( dm_server_id: dm_server_4.id, dm_member_id: demouser1.id )
dm_membership_8 = DmMember.create!( dm_server_id: dm_server_4.id, dm_member_id: demouser2.id )
dm_membership_9 = DmMember.create!( dm_server_id: dm_server_4.id, dm_member_id: stacy.id )
dm_membership_10 = DmMember.create!( dm_server_id: dm_server_5.id, dm_member_id: demouser1.id )
dm_membership_11 = DmMember.create!( dm_server_id: dm_server_5.id, dm_member_id: test1.id )
DmMessage.create!(dm_server_id: dm_server_4.id, sender_id: mr_Wumpus.id, body:"Welcome to the beginning of your Group Chat" )
DmMessage.create!(dm_server_id: dm_server_4.id, sender_id: stacy.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: dm_server_4.id, sender_id: demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: dm_server_4.id, sender_id: demouser2.id, body:"Hi!." )
DmMessage.create!(dm_server_id: dm_server_5.id, sender_id: mr_Wumpus.id, body:"This is the beginning of your direct message history with" )
DmMessage.create!(dm_server_id: dm_server_5.id, sender_id: test1.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: dm_server_5.id, sender_id: demouser1.id, body:"Will do. Thanks for the advice and motivation." )

#data  for seeding users (Reserved)

MichaelR = User.create!(
    username: "MichaelR", 
    email: "mikeR@strife.com", 
    password: "Qwerty1234", 
    birthday: Date.new(1996,10,10),
    phone_number:"+17185520000"

)
KrystalR = User.create!(username: "KrystalR", email: "KrystalR@strife.com", password: "Qwerty1234", birthday: Date.new(1997,8,10),phone_number:"+17185520000")
vivian = User.create!(username: "Vivian", email: "vivianC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
mikeC = User.create!(username: "MichaelC", email: "mikeC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
MikeH = User.create!(username: "MichaelH", email: "MikeH@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
VeraH = User.create!(username: "Vera", email: "VeraH@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
EricB = User.create!(username: "Eric", email: "EricB@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
EvanF = User.create!(username: "Evan", email: "EvanF@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
AlanN = User.create!(username: "Alan", email: "AlanNg@strife.com", password: "AlanNg4TA", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
LinS = User.create!(username: "LinShen", email: "LinS@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
KevinN = User.create!(username: "Kevin", email: "KevinN@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
madeleineP = User.create!(username: "Madeleine", email: "madeleineP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
TomLL = User.create!(username: "Tom", email: "TomLL@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
Leo = User.create!(username: "Leo", email: "LeoC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
Karen = User.create!(username: "Karen", email: "KarenP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
Gabriel = User.create!(username: "Gabriel", email: "GabrielG@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
David_allen = User.create!(username: "David-allen", email: "David-allen@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
DavidZ = User.create!(username: "DavidZ", email: "DavidZ@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
nikhilK = User.create!(username: "Nikhil", email: "nikhilK@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
NaranI = User.create!(username: "Naran", email: "NaranI@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
DuncanM = User.create!(username: "Duncan", email: "DuncanM@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
AlisherP = User.create!(username: "Alisher", email: "AlisherP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")
victorH = User.create!(username: "Victor", email: "VictorH@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520000")





#friends
 Friendship.create!(friend_id: victorH.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: victorH.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser2.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: demouser2.id, friend_request_status: 3);
 Friendship.create!(friend_id: stacy.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: stacy.id, friend_request_status: 3);
 Friendship.create!(friend_id: spencer.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: spencer.id, friend_request_status: 3);
 Friendship.create!(friend_id: kinKa.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: kinKa.id, friend_request_status: 3);
 Friendship.create!(friend_id: jwong.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: jwong.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: KrystalR.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: KrystalR.id, friend_request_status: 3);
 Friendship.create!(friend_id: vivian.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: vivian.id, friend_request_status: 3);
 Friendship.create!(friend_id: mikeC.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: mikeC.id, friend_request_status: 3);
 Friendship.create!(friend_id: MikeH.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: MikeH.id, friend_request_status: 3);
 Friendship.create!(friend_id: VeraH.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: VeraH.id, friend_request_status: 3);
 Friendship.create!(friend_id: EricB.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: EricB.id, friend_request_status: 3);
 Friendship.create!(friend_id: EvanF.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: EvanF.id, friend_request_status: 3);
 Friendship.create!(friend_id: AlanN.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: AlanN.id, friend_request_status: 3);
 Friendship.create!(friend_id: LinS.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: LinS.id, friend_request_status: 3);
 Friendship.create!(friend_id: KevinN.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: KevinN.id, friend_request_status: 3);
 Friendship.create!(friend_id: madeleineP.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: madeleineP.id, friend_request_status: 3);
 Friendship.create!(friend_id: TomLL.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: TomLL.id, friend_request_status: 3);
 Friendship.create!(friend_id: Leo.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: Leo.id, friend_request_status: 3);
 Friendship.create!(friend_id: Karen.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: Karen.id, friend_request_status: 3);
 Friendship.create!(friend_id: Gabriel.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: Gabriel.id, friend_request_status: 3);
 Friendship.create!(friend_id: David_allen.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: David_allen.id, friend_request_status: 3);
 Friendship.create!(friend_id: DavidZ.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: DavidZ.id, friend_request_status: 3);
 Friendship.create!(friend_id: nikhilK.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: nikhilK.id, friend_request_status: 3);
 Friendship.create!(friend_id: NaranI.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: NaranI.id, friend_request_status: 3);
 Friendship.create!(friend_id: DuncanM.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: DuncanM.id, friend_request_status: 3);
 Friendship.create!(friend_id: AlisherP.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: AlisherP.id, friend_request_status: 3);


 Friendship.create!(friend_id: demouser2.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: demouser2.id, friend_request_status: 3);
 Friendship.create!(friend_id: stacy.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: stacy.id, friend_request_status: 3);
 Friendship.create!(friend_id: spencer.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: spencer.id, friend_request_status: 3);
 Friendship.create!(friend_id: kinKa.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: kinKa.id, friend_request_status: 3);
 Friendship.create!(friend_id: jwong.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: jwong.id, friend_request_status: 3);
 Friendship.create!(friend_id: vivian.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: vivian.id, friend_request_status: 3);
 Friendship.create!(friend_id: mikeC.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: mikeC.id, friend_request_status: 3);
 Friendship.create!(friend_id: MikeH.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: MikeH.id, friend_request_status: 3);
 Friendship.create!(friend_id: VeraH.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: VeraH.id, friend_request_status: 3);
 Friendship.create!(friend_id: EricB.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: EricB.id, friend_request_status: 3);
 Friendship.create!(friend_id: EvanF.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: EvanF.id, friend_request_status: 3);
 Friendship.create!(friend_id: AlanN.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: AlanN.id, friend_request_status: 3);
 Friendship.create!(friend_id: LinS.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: LinS.id, friend_request_status: 3);
 Friendship.create!(friend_id: KevinN.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: KevinN.id, friend_request_status: 3);
 Friendship.create!(friend_id: madeleineP.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: madeleineP.id, friend_request_status: 3);
 Friendship.create!(friend_id: TomLL.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: TomLL.id, friend_request_status: 3);
 Friendship.create!(friend_id: Leo.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Leo.id, friend_request_status: 3);
 Friendship.create!(friend_id: Karen.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Karen.id, friend_request_status: 3);
 Friendship.create!(friend_id: Gabriel.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Gabriel.id, friend_request_status: 3);
 Friendship.create!(friend_id: David_allen.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: David_allen.id, friend_request_status: 3);
 Friendship.create!(friend_id: DavidZ.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: DavidZ.id, friend_request_status: 3);
 Friendship.create!(friend_id: nikhilK.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: nikhilK.id, friend_request_status: 3);
 Friendship.create!(friend_id: NaranI.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: NaranI.id, friend_request_status: 3);
 Friendship.create!(friend_id: DuncanM.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: DuncanM.id, friend_request_status: 3);
 Friendship.create!(friend_id: AlisherP.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: AlisherP.id, friend_request_status: 3);
 Friendship.create!(friend_id: KrystalR.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: KrystalR.id, friend_request_status: 3);
 Friendship.create!(friend_id: spencer.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: spencer.id, friend_request_status: 3);
 Friendship.create!(friend_id: victorH.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: victorH.id, friend_request_status: 3);
 Friendship.create!(friend_id: jwong.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: jwong.id, friend_request_status: 3);
 Friendship.create!(friend_id: ayce.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: ayce.id, friend_request_status: 3);
 Friendship.create!(friend_id: kinKa.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: kinKa.id, friend_request_status: 3);




 #pending requests
 Friendship.create!(friend_id: test4.id, user_id: demouser1.id, friend_request_status: 2);
 Friendship.create!(friend_id: demouser1.id, user_id: test4.id, friend_request_status: 1);
 Friendship.create!(friend_id: ayce.id, user_id: demouser1.id, friend_request_status: 2);
 Friendship.create!(friend_id: demouser1.id, user_id: ayce.id, friend_request_status: 1);
 Friendship.create!(friend_id: test1.id, user_id: demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: demouser1.id, user_id: test1.id, friend_request_status: 2);
 Friendship.create!(friend_id: test2.id, user_id: demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: demouser1.id, user_id: test2.id, friend_request_status: 2);
 Friendship.create!(friend_id: test3.id, user_id: demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: demouser1.id, user_id: test3.id, friend_request_status: 2);
 Friendship.create!(friend_id: kinKa.id, user_id: demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: demouser1.id, user_id: kinKa.id, friend_request_status: 2);
 Friendship.create!(friend_id: spencer.id, user_id: demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: demouser1.id, user_id: spencer.id, friend_request_status: 2);
 Friendship.create!(friend_id: jwong.id, user_id: demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: demouser1.id, user_id: jwong.id, friend_request_status: 2);


#blockusers
Friendship.create!(friend_id: spamUser1.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: spamUser2.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: spamUser1.id, user_id: MichaelR.id, friend_request_status: -1);
Friendship.create!(friend_id: spamUser2.id, user_id: MichaelR.id, friend_request_status: -1);


# server memberships for attendance circles and app/acc servers
#ayce attendance
ServerMembership.create(server_id: ayceServer.id , user_id: vivian.id)
ServerMembership.create(server_id: ayceServer.id , user_id: EricB.id)
ServerMembership.create(server_id: ayceServer.id , user_id: LinS.id)
ServerMembership.create(server_id: ayceServer.id , user_id: KevinN.id)
ServerMembership.create(server_id: ayceServer.id , user_id: madeleineP.id)
ServerMembership.create(server_id: ayceServer.id , user_id: TomLL.id)
ServerMembership.create(server_id: ayceServer.id , user_id: David_allen.id)
ServerMembership.create(server_id: ayceServer.id , user_id: NaranI.id)
ServerMembership.create(server_id: ayceServer.id , user_id: AlisherP.id)
ServerMembership.create(server_id: ayceServer.id , user_id: nikhilK.id)
ServerMembership.create(server_id: ayceServer.id , user_id: spencer.id)
ServerMembership.create(server_id: ayceServer.id , user_id: jwong.id)
ServerMembership.create(server_id: ayceServer.id , user_id: victorH.id)


#kinka attendace
ServerMembership.create(server_id: kinkaServer.id , user_id: victorH.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: ayce.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: spencer.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: jwong.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: MichaelR.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: mikeC.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: DuncanM.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: DavidZ.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: Gabriel.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: Leo.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: Karen.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: AlanN.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: EvanF.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: VeraH.id)
ServerMembership.create(server_id: kinkaServer.id , user_id: MikeH.id)


#app/acc offical
appaco = Server.create!(
    server_owner_id: kinKa.id,
    server_name: "App Academy Campus", 
    public: true
)
appacStrife.server_Icon.attach(io: File.open('app/assets/images/appacc.png'), filename: 'appacc.png')



ServerMembership.create(server_id: appaco.id , user_id: kinKa.id)
ServerMembership.create(server_id: appaco.id , user_id: ayce.id)
ServerMembership.create(server_id: appaco.id , user_id: jwong.id)
ServerMembership.create(server_id: appaco.id , user_id: spencer.id)
ServerMembership.create(server_id: appaco.id , user_id: victorH.id)
ServerMembership.create(server_id: appaco.id , user_id: MichaelR.id)
ServerMembership.create(server_id: appaco.id , user_id: vivian.id)
ServerMembership.create(server_id: appaco.id , user_id: mikeC.id)
ServerMembership.create(server_id: appaco.id , user_id: MikeH.id)
ServerMembership.create(server_id: appaco.id , user_id: VeraH.id)
ServerMembership.create(server_id: appaco.id , user_id: EricB.id)
ServerMembership.create(server_id: appaco.id , user_id: EvanF.id)
ServerMembership.create(server_id: appaco.id , user_id: AlanN.id)
ServerMembership.create(server_id: appaco.id , user_id: LinS.id)
ServerMembership.create(server_id: appaco.id , user_id: KevinN.id)
ServerMembership.create(server_id: appaco.id , user_id: madeleineP.id)
ServerMembership.create(server_id: appaco.id , user_id: TomLL.id)
ServerMembership.create(server_id: appaco.id , user_id: Leo.id)
ServerMembership.create(server_id: appaco.id , user_id: Karen.id)
ServerMembership.create(server_id: appaco.id , user_id: Gabriel.id)
ServerMembership.create(server_id: appaco.id , user_id: David_allen.id)
ServerMembership.create(server_id: appaco.id , user_id: DavidZ.id)
ServerMembership.create(server_id: appaco.id , user_id: nikhilK.id)
ServerMembership.create(server_id: appaco.id , user_id: NaranI.id)
ServerMembership.create(server_id: appaco.id , user_id: DuncanM.id)
ServerMembership.create(server_id: appaco.id , user_id: AlisherP.id)


#app/ac unoffical

appacStrife = Server.create!(
    server_owner_id: MichaelR.id,
    server_name: "App/ac Cohort 3/2022", 
    public: true

)
appacStrife.server_Icon.attach(io: File.open('app/assets/images/Appacademylogo.png'), filename: 'Appacademylogo.png')

ServerMembership.create(server_id: appacStrife.id , user_id: MichaelR.id)
ServerMembership.create(server_id: appacStrife.id , user_id: KrystalR.id)
ServerMembership.create(server_id: appacStrife.id , user_id: vivian.id)
ServerMembership.create(server_id: appacStrife.id , user_id: mikeC.id)
ServerMembership.create(server_id: appacStrife.id , user_id: MikeH.id)
ServerMembership.create(server_id: appacStrife.id , user_id: VeraH.id)
ServerMembership.create(server_id: appacStrife.id , user_id: EricB.id)
ServerMembership.create(server_id: appacStrife.id , user_id: EvanF.id)
ServerMembership.create(server_id: appacStrife.id , user_id: AlanN.id)
ServerMembership.create(server_id: appacStrife.id , user_id: LinS.id)
ServerMembership.create(server_id: appacStrife.id , user_id: KevinN.id)
ServerMembership.create(server_id: appacStrife.id , user_id: madeleineP.id)
ServerMembership.create(server_id: appacStrife.id , user_id: TomLL.id)
ServerMembership.create(server_id: appacStrife.id , user_id: Leo.id)
ServerMembership.create(server_id: appacStrife.id , user_id: Karen.id)
ServerMembership.create(server_id: appacStrife.id , user_id: Gabriel.id)
ServerMembership.create(server_id: appacStrife.id , user_id: David_allen.id)
ServerMembership.create(server_id: appacStrife.id , user_id: DavidZ.id)
ServerMembership.create(server_id: appacStrife.id , user_id: nikhilK.id)
ServerMembership.create(server_id: appacStrife.id , user_id: NaranI.id)
ServerMembership.create(server_id: appacStrife.id , user_id: DuncanM.id)
ServerMembership.create(server_id: appacStrife.id , user_id: AlisherP.id)
ServerMembership.create(server_id: appacStrife.id , user_id: victorH.id)
ServerMembership.create(server_id: appacStrife.id , user_id: kinKa.id)






