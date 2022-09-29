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

Mr_Wumpus = User.create!(
    username: 'Mr.Wumpus',
    email: 'wumbo@strife.com',
    birthday: Date.new(1996,02,25),
    password: 'wumboing',
    color_tag: 10,
    strife_id_tag:0001,
    online: true
)
Mr_Wumpus.photo.attach(io: File.open('app/assets/images/discord_Strife_logo.png'), filename:'discord_Strife_logo.png')

StrifeMainServer = Server.create!(
    server_owner_id: Mr_Wumpus.id,
    server_name: "Welcome to Strife", 
    public: true
)

StrifeMainServer.server_Icon.attach(io: File.open('app/assets/images/discord_Strife_logo.png'), filename:'discord_Strife_logo.png')
ServerMembership.create(server_id: StrifeMainServer.id , user_id: Mr_Wumpus.id)

# demo user 1
Demouser1=User.create!(
    username: 'DemoUser1',
    email: 'DemoUser1@strife.com',
    birthday: Date.new(1996,02,25),
    password: 'qwerty1234',
    phone_number:"+17185557894"

)
Demouser1.photo.attach(io: File.open('app/assets/images/loading.gif'), filename: 'loading.gif')
# demo user 2
Demouser2=User.create!(
    username: 'DemoUser2',
    email: 'DemoUser2@strife.com',
    password: 'QWERTY1234',
    birthday: Date.new(1997,03,10),
    phone_number:"+17185557890"
)

Stacy=User.create!(
    username: 'Stacy',
    email: 'Demo56@strife.com',
    password: 'QWERTY1234',
    birthday: Date.new(1990,03,10),
    phone_number:"+17185557891",
    online: true
)

DefaultServer = Server.create!(
    server_owner_id: Demouser1.id,
    server_name: "Demo Server",
    public: true

)

DefaultServerChannel = Channel.create!(channel_name: "not_general" , server_id: DefaultServer.id , channel_type:1)
DefaultServerVoiceChannel = Channel.create!(channel_name: "general-voice Chat" , server_id: DefaultServer.id , channel_type:2)



Spencer = User.create(
    email: "Iascone@aa.com",
    username: "Iascone",
    password: "great TA",
    birthday: Date.new(1990,03,10),
    phone_number:"+17185557892",
    online: true

)

Ayce = User.create(
  email: "ayce@aa.com",
  username: "Ayce machine",
  password: "12348hello",
  birthday: Date.new(1990,03,10),
  phone_number:"+17185557893"

)

Jwong = User.create(
    email: "jwong@hhl.com",
    username: "Jwong",
    password: "Dancedancerevolution",
    birthday: Date.new(1990,03,10),
    phone_number:"+17185557896"

)

KinKa = User.create!(
    username: "burgerkinka", 
    email: "kinka@kinka.com", 
    password: "123456789", 
    birthday: Date.new(1990,03,10),
    phone_number:"+17185557897",
    online: true

)


KinKaServer = Server.create!(
    server_owner_id: KinKa.id,
    server_name: "Kin Ka Attendance",
    public: true

)
AyceServer = Server.create!(
    server_owner_id: Ayce.id,
    server_name: "Ayce Attendance", 
    public: true

)


Server1 = Server.create!(
    server_owner_id: Demouser1.id,
    server_name: "Server1", 
    public: true

)


DemoChannel = Channel.create!(channel_name: "Demo Channel", server_id: DefaultServer.id, channel_type:1)
KinKaCircle = Channel.create!(channel_name: "Kin Ka's Circle", server_id: KinKaServer.id, channel_type:1)
AyceCircle = Channel.create!(channel_name: "Ayce's Circle", server_id: AyceServer.id, channel_type:1)


ServerMembership.create(server_id: AyceServer.id , user_id: Demouser1.id)
ServerMembership.create(server_id: AyceServer.id , user_id: Demouser2.id)
ServerMembership.create(server_id: AyceServer.id , user_id: KinKa.id)
ServerMembership.create(server_id: AyceServer.id , user_id: Spencer.id)
ServerMembership.create(server_id: AyceServer.id , user_id: Stacy.id)

Message.create(channel_id: AyceCircle.id, author_id:Demouser1.id, body: "hello?")
Message.create(channel_id: AyceCircle.id, author_id: Demouser2.id, body: "hell0!")
Message.create(channel_id: AyceCircle.id, author_id:Demouser1.id, body: "hello?")
Message.create(channel_id: AyceCircle.id, author_id: Demouser2.id, body: "hell0!")
Message.create(channel_id: AyceCircle.id, author_id:Demouser1.id, body: "hello?")
Message.create(channel_id: AyceCircle.id, author_id: Demouser2.id, body: "hell0!")
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: "attendance time!")
Message.create(channel_id: AyceCircle.id, author_id: KinKa.id, body: "demo!?")

Dm_server_1 = DmServer.create!( owner_id: Demouser1.id )
Dm_server_2 = DmServer.create!( owner_id: Demouser1.id)
Dm_server_3 = DmServer.create!( owner_id: Demouser1.id )


Dm_membership_1 = DmMember.create!( dm_server_id: Dm_server_1.id, dm_member_id: Demouser1.id )
Dm_membership_2 = DmMember.create!( dm_server_id: Dm_server_1.id, dm_member_id: Demouser2.id)
Dm_membership_3 = DmMember.create!( dm_server_id: Dm_server_2.id, dm_member_id: Demouser1.id )
Dm_membership_4 = DmMember.create!( dm_server_id: Dm_server_2.id, dm_member_id: Stacy.id )
Dm_membership_5 = DmMember.create!( dm_server_id: Dm_server_3.id, dm_member_id: Demouser1.id )
Dm_membership_6 = DmMember.create!( dm_server_id: Dm_server_3.id, dm_member_id: Ayce.id )


DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Mr_Wumpus.id, body:"This is the beginning of your direct message history with" )
DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Demouser2.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Demouser2.id, body:"Congrats!" )

DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Mr_Wumpus.id, body:"This is the beginning of your direct message history with" )
DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Stacy.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Stacy.id, body:"Congrats!" )

DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Mr_Wumpus.id, body:"This is the beginning of your direct message history with" )
DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Ayce.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Demouser1.id, body:"Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man." )
DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Ayce.id, body:"Congrats!" )



SpamUser1 =User.create!(
    username: "spamuser@gmail.com", 
    email: "spamuser@gmail.com", 
    password: "spamuser@gmail.com", 
    birthday: Date.new(1990,03,10),
    phone_number:"+17185657894"

)

SpamUser2 =User.create!(
    username: "spamuser1@gmail.com", 
    email: "spamuser1@gmail.com",
    password: "spamuser1@gmail.com",
    birthday: Date.new(1990,03,10),
    phone_number:"+17285527894"

)

Dm_server_4 = DmServer.create!( owner_id: Demouser1.id )
Dm_server_5 = DmServer.create!( owner_id: Demouser1.id )
Dm_membership_7 = DmMember.create!( dm_server_id: Dm_server_4.id, dm_member_id: Demouser1.id )
Dm_membership_8 = DmMember.create!( dm_server_id: Dm_server_4.id, dm_member_id: Demouser2.id )
Dm_membership_9 = DmMember.create!( dm_server_id: Dm_server_4.id, dm_member_id: Stacy.id )
Dm_membership_10 = DmMember.create!( dm_server_id: Dm_server_5.id, dm_member_id: Demouser1.id )
Dm_membership_11 = DmMember.create!( dm_server_id: Dm_server_5.id, dm_member_id: Spencer.id )
DmMessage.create!(dm_server_id: Dm_server_4.id, sender_id: Mr_Wumpus.id, body:"Welcome to the beginning of your Group Chat" )
DmMessage.create!(dm_server_id: Dm_server_4.id, sender_id: Stacy.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: Dm_server_4.id, sender_id: Demouser1.id, body:"Will do. Thanks for the advice and motivation." )
DmMessage.create!(dm_server_id: Dm_server_4.id, sender_id: Demouser2.id, body:"Hi!." )
DmMessage.create!(dm_server_id: Dm_server_5.id, sender_id: Mr_Wumpus.id, body:"This is the beginning of your direct message history with" )
DmMessage.create!(dm_server_id: Dm_server_5.id, sender_id: Spencer.id, body:"You should apply to App Academy. You would be a great software engineer." )
DmMessage.create!(dm_server_id: Dm_server_5.id, sender_id: Demouser1.id, body:"Will do. Thanks for the advice and motivation." )

#data  for seeding users (Reserved)

MichaelR = User.create!(
    username: "MichaelR", 
    email: "mikeR@strife.com", 
    password: "Qwerty1234", 
    birthday: Date.new(1996,10,10),
    phone_number:"+17185520000",
    online: true

)
KrystalR = User.create!(username: "KrystalR", email: "KrystalR@strife.com", password: "Qwerty1234", birthday: Date.new(1997,8,10),phone_number:"+17185520001",online: true)
Vivian = User.create!(username: "Vivian", email: "vivianC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520002",online: true)
MikeC = User.create!(username: "MichaelC", email: "MikeC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520003")
MikeH = User.create!(username: "MichaelH", email: "MikeH@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520004")
VeraH = User.create!(username: "Vera", email: "VeraH@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520005")
EricB = User.create!(username: "Eric", email: "EricB@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520006")
EvanF = User.create!(username: "Evan", email: "EvanF@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520007")
AlanN = User.create!(username: "Alan", email: "AlanNg@strife.com", password: "AlanNg4TA", birthday: Date.new(1990,03,10),phone_number:"+17185520008",online: true)
LinS = User.create!(username: "LinShen", email: "LinS@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520009")
KevinN = User.create!(username: "Kevin", email: "KevinN@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520010")
MadeleineP = User.create!(username: "Madeleine", email: "MadeleineP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520011")
TomLL = User.create!(username: "Tom", email: "TomLL@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520012")
Leo = User.create!(username: "Leo", email: "LeoC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520013",online: true)
Karen = User.create!(username: "Karen", email: "KarenP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520014")
Gabriel = User.create!(username: "Gabriel", email: "GabrielG@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520015",online: true)
David_allen = User.create!(username: "David-allen", email: "David-allen@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520016",online: true)
DavidZ = User.create!(username: "DavidZ", email: "DavidZ@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520018")
NikhilK = User.create!(username: "Nikhil", email: "NikhilK@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520019")
NaranI = User.create!(username: "Naran", email: "NaranI@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520022")
DuncanM = User.create!(username: "Duncan", email: "DuncanM@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520023")
AlisherP = User.create!(username: "Alisher", email: "AlisherP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520024")
VictorH = User.create!(username: "Victor", email: "VictorH@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10),phone_number:"+17185520025",online: true)





#friends

 Friendship.create!(friend_id: Demouser2.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: Demouser2.id, friend_request_status: 3);
 Friendship.create!(friend_id: Stacy.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: Stacy.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: KrystalR.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: KrystalR.id, friend_request_status: 3);
 Friendship.create!(friend_id: Vivian.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: Vivian.id, friend_request_status: 3);
 Friendship.create!(friend_id: AlanN.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: AlanN.id, friend_request_status: 3);
 Friendship.create!(friend_id: TomLL.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: TomLL.id, friend_request_status: 3);
 Friendship.create!(friend_id: Karen.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: Karen.id, friend_request_status: 3);
 Friendship.create!(friend_id: Gabriel.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: Gabriel.id, friend_request_status: 3);
 Friendship.create!(friend_id: David_allen.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: David_allen.id, friend_request_status: 3);
 Friendship.create!(friend_id: NikhilK.id, user_id: Demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: Demouser1.id, user_id: NikhilK.id, friend_request_status: 3);



 Friendship.create!(friend_id: Demouser2.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Demouser2.id, friend_request_status: 3);
 Friendship.create!(friend_id: Stacy.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Stacy.id, friend_request_status: 3);
 Friendship.create!(friend_id: Vivian.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Vivian.id, friend_request_status: 3);
 Friendship.create!(friend_id: MikeC.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: MikeC.id, friend_request_status: 3);
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
 Friendship.create!(friend_id: MadeleineP.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: MadeleineP.id, friend_request_status: 3);
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
 Friendship.create!(friend_id: NikhilK.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: NikhilK.id, friend_request_status: 3);
 Friendship.create!(friend_id: NaranI.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: NaranI.id, friend_request_status: 3);
 Friendship.create!(friend_id: DuncanM.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: DuncanM.id, friend_request_status: 3);
 Friendship.create!(friend_id: AlisherP.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: AlisherP.id, friend_request_status: 3);
 Friendship.create!(friend_id: KrystalR.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: KrystalR.id, friend_request_status: 3);
 Friendship.create!(friend_id: Spencer.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Spencer.id, friend_request_status: 3);
 Friendship.create!(friend_id: VictorH.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: VictorH.id, friend_request_status: 3);
 Friendship.create!(friend_id: Jwong.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Jwong.id, friend_request_status: 3);
 Friendship.create!(friend_id: Ayce.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: Ayce.id, friend_request_status: 3);
 Friendship.create!(friend_id: KinKa.id, user_id: MichaelR.id, friend_request_status: 3);
 Friendship.create!(friend_id: MichaelR.id, user_id: KinKa.id, friend_request_status: 3);



 #pending requests
 Friendship.create!(friend_id: Ayce.id, user_id: Demouser1.id, friend_request_status: 2);
 Friendship.create!(friend_id: Demouser1.id, user_id: Ayce.id, friend_request_status: 1);
 Friendship.create!(friend_id: KinKa.id, user_id: Demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: Demouser1.id, user_id: KinKa.id, friend_request_status: 2);
 Friendship.create!(friend_id: Spencer.id, user_id: Demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: Demouser1.id, user_id: Spencer.id, friend_request_status: 2);
 Friendship.create!(friend_id: Jwong.id, user_id: Demouser1.id, friend_request_status: 1);
 Friendship.create!(friend_id: Demouser1.id, user_id: Jwong.id, friend_request_status: 2);


#blockusers
Friendship.create!(friend_id: SpamUser1.id, user_id: Demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: SpamUser2.id, user_id: Demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: SpamUser1.id, user_id: MichaelR.id, friend_request_status: -1);
Friendship.create!(friend_id: SpamUser2.id, user_id: MichaelR.id, friend_request_status: -1);


# server memberships for attendance circles and app/acc servers
#Ayce attendance
ServerMembership.create(server_id: AyceServer.id , user_id: Vivian.id)
ServerMembership.create(server_id: AyceServer.id , user_id: EricB.id)
ServerMembership.create(server_id: AyceServer.id , user_id: LinS.id)
ServerMembership.create(server_id: AyceServer.id , user_id: KevinN.id)
ServerMembership.create(server_id: AyceServer.id , user_id: MadeleineP.id)
ServerMembership.create(server_id: AyceServer.id , user_id: TomLL.id)
ServerMembership.create(server_id: AyceServer.id , user_id: David_allen.id)
ServerMembership.create(server_id: AyceServer.id , user_id: NaranI.id)
ServerMembership.create(server_id: AyceServer.id , user_id: AlisherP.id)
ServerMembership.create(server_id: AyceServer.id , user_id: NikhilK.id)
ServerMembership.create(server_id: AyceServer.id , user_id: Spencer.id)
ServerMembership.create(server_id: AyceServer.id , user_id: Jwong.id)
ServerMembership.create(server_id: AyceServer.id , user_id: VictorH.id)


#kinka attendace
ServerMembership.create(server_id: KinKaServer.id , user_id: VictorH.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: Ayce.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: Spencer.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: Jwong.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: MichaelR.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: MikeC.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: DuncanM.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: DavidZ.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: Gabriel.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: Leo.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: Karen.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: AlanN.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: EvanF.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: VeraH.id)
ServerMembership.create(server_id: KinKaServer.id , user_id: MikeH.id)


Message.create(channel_id: KinKaCircle.id , author_id:Demouser1.id, body: "hello?")
Message.create(channel_id: KinKaCircle.id , author_id:KinKa.id, body: "hello? taking attendance everyone!")
Message.create(channel_id: KinKaCircle.id , author_id:KinKa.id, body: "Michael R?")
Message.create(channel_id: KinKaCircle.id , author_id: MichaelR.id, body: "Here!")
Message.create(channel_id: KinKaCircle.id , author_id:KinKa.id, body: "Alan!?")
Message.create(channel_id: KinKaCircle.id , author_id: AlanN.id, body: "Here!")







#app/acc offical
Appaco = Server.create!(
    server_owner_id: KinKa.id,
    server_name: "App Academy Campus", 
    public: true
)
Appaco.server_Icon.attach(io: File.open('app/assets/images/appacc.png'), filename: 'appacc.png')



ServerMembership.create(server_id: Appaco.id , user_id: KinKa.id)
ServerMembership.create(server_id: Appaco.id , user_id: Ayce.id)
ServerMembership.create(server_id: Appaco.id , user_id: Jwong.id)
ServerMembership.create(server_id: Appaco.id , user_id: Spencer.id)
ServerMembership.create(server_id: Appaco.id , user_id: VictorH.id)
ServerMembership.create(server_id: Appaco.id , user_id: MichaelR.id)
ServerMembership.create(server_id: Appaco.id , user_id: Vivian.id)
ServerMembership.create(server_id: Appaco.id , user_id: MikeC.id)
ServerMembership.create(server_id: Appaco.id , user_id: MikeH.id)
ServerMembership.create(server_id: Appaco.id , user_id: VeraH.id)
ServerMembership.create(server_id: Appaco.id , user_id: EricB.id)
ServerMembership.create(server_id: Appaco.id , user_id: EvanF.id)
ServerMembership.create(server_id: Appaco.id , user_id: AlanN.id)
ServerMembership.create(server_id: Appaco.id , user_id: LinS.id)
ServerMembership.create(server_id: Appaco.id , user_id: KevinN.id)
ServerMembership.create(server_id: Appaco.id , user_id: MadeleineP.id)
ServerMembership.create(server_id: Appaco.id , user_id: TomLL.id)
ServerMembership.create(server_id: Appaco.id , user_id: Leo.id)
ServerMembership.create(server_id: Appaco.id , user_id: Karen.id)
ServerMembership.create(server_id: Appaco.id , user_id: Gabriel.id)
ServerMembership.create(server_id: Appaco.id , user_id: David_allen.id)
ServerMembership.create(server_id: Appaco.id , user_id: DavidZ.id)
ServerMembership.create(server_id: Appaco.id , user_id: NikhilK.id)
ServerMembership.create(server_id: Appaco.id , user_id: NaranI.id)
ServerMembership.create(server_id: Appaco.id , user_id: DuncanM.id)
ServerMembership.create(server_id: Appaco.id , user_id: AlisherP.id)


WelcomeAndRules = Channel.create!(channel_name: "Welcome and Server Rules", server_id: Appaco.id, channel_type:1)
CampusAct = Channel.create!(channel_name: "Course Schedule", server_id: Appaco.id, channel_type:1)
Resourceandhelp = Channel.create!(channel_name: "Resources and Help", server_id: Appaco.id, channel_type:1)

Message.create(channel_id: WelcomeAndRules.id , author_id:KinKa.id, body: "Hello there! Welcome to the App Academy Server!")
Message.create(channel_id: WelcomeAndRules.id , author_id:KinKa.id, body: "Here are the Rules Of Conduct")

Message.create(channel_id: WelcomeAndRules.id , author_id:KinKa.id, body: "1. Make sure you take attendance at your group circle servers 9am, 1pm and 5:30pm everyday!")
Message.create(channel_id: WelcomeAndRules.id , author_id:KinKa.id, body: "2. Be Respectful")
Message.create(channel_id: WelcomeAndRules.id , author_id:KinKa.id, body: "3. No Talking! or Texting in the Server!")
Message.create(channel_id: WelcomeAndRules.id , author_id:KinKa.id, body: "4. Keep Conversations on Topic use your own server if you wish to speak on off topic subjects")
Message.create(channel_id: WelcomeAndRules.id , author_id:KinKa.id, body: "5. We Hope you have a great time learning with us!")


Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Hey There! This Channel is to provide you notice of the Course Schedule and what we will be learning in class")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "BootCamp Starts On - 3/28/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Software Fundementals - Remote Online - 3/28/22 - 4/11/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Beginner Ruby 3/22/22 - 4/14/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Ruby FA1-Practice - 3/31/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Ruby FA1 - 4/4/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Ruby FA2 - 4/11/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "On Campus In-Person Starts  - 4/12/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Intermediate Ruby - 4/12/22 - 4/25/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Ruby 1 Prep - 4/14/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Ruby 1 - 4/18/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Ruby 2 - 4/25/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Rails & SQL - 4/26/22 - 5/16/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Rails 1 - 5/3/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Rails Olympics - 5/9/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Rails 2 - 5/16/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "JavaScript - 5/17/22 - 5/26/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "JavaScript 1 - 5/26/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "JavaScript Project - 5/27/22 - 6/2/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "JavaScript Project - Presentations - 6/2/22 @ 1:00pm")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "React 6/3/22 - 6/17/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "React 1 6/17/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Full Stack Project  6/17/22 - 7/1/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Full Stack Project - Presentations - 7/1/22 @ 9:15am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "MERN Project - 7/1/22 - 7/8/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "MERN Project - Presentations - 7/8/22 @ 9:15am - 10:30am")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Job Search Prep - 7/8/22 - 7/15/22")
Message.create(channel_id: CampusAct.id , author_id:KinKa.id, body: "Graduation - 7/15/22 @ 4:00pm")


Message.create(channel_id: Resourceandhelp.id , author_id: KinKa.id, body: "Hey There! This Channel is to provide resources and help if you were too lazy.. im mean couldnt do your homework")
Message.create(channel_id: Resourceandhelp.id , author_id: KinKa.id, body: "Come To Class on Time")
Message.create(channel_id: Resourceandhelp.id , author_id: KinKa.id, body: "App/ac Learn")
Message.create(channel_id: Resourceandhelp.id , author_id: KinKa.id, body: "HackerRank")
Message.create(channel_id: Resourceandhelp.id , author_id: KinKa.id, body: "LeetCode")
Message.create(channel_id: Resourceandhelp.id , author_id: KinKa.id, body: "Do your Homework")







#app/ac unoffical

AppacStrife = Server.create!(
    server_owner_id: MichaelR.id,
    server_name: "App/ac Cohort 3/2022", 
    public: true

)
AppacStrife.server_Icon.attach(io: File.open('app/assets/images/Appacademylogo.png'), filename: 'Appacademylogo.png')

ServerMembership.create(server_id: AppacStrife.id , user_id: MichaelR.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: KrystalR.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: Vivian.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: MikeC.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: MikeH.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: VeraH.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: EricB.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: EvanF.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: AlanN.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: LinS.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: KevinN.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: MadeleineP.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: TomLL.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: Leo.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: Karen.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: Gabriel.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: David_allen.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: DavidZ.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: NikhilK.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: NaranI.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: DuncanM.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: AlisherP.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: VictorH.id)
ServerMembership.create(server_id: AppacStrife.id , user_id: KinKa.id)


Jobsearch = Channel.create!(channel_name: "job search", server_id: AppacStrife.id, channel_type:1)
Algo = Channel.create!(channel_name: "dsa", server_id: AppacStrife.id, channel_type:1)
RandomTopics = Channel.create!(channel_name: "off-topic", server_id: AppacStrife.id, channel_type:1)




Message.create(channel_id: Jobsearch.id , author_id: MichaelR.id, body: "Post Job Stuff Here")
Message.create(channel_id: Jobsearch.id , author_id: DuncanM.id, body: "Cool okay")
Message.create(channel_id: Jobsearch.id , author_id: Vivian.id, body: "Thanks for making this channel")

Message.create(channel_id: Algo.id , author_id: MichaelR.id, body: "Post DSA Stuff Here")
Message.create(channel_id: Algo.id , author_id: AlanN.id, body: "LeetCode")
Message.create(channel_id: Algo.id , author_id: EricB.id, body: "HackerRank")

Message.create(channel_id: RandomTopics.id , author_id: MichaelR.id, body: "Post Memes Here")
Message.create(channel_id: RandomTopics.id , author_id: Vivian.id, body: "kk")
Message.create(channel_id: RandomTopics.id , author_id: David_allen.id, body: "thats funny you know what memes are?")


Server2 = Server.create!(
    server_owner_id: KinKa.id,
    server_name: "App/ac - TA Server", 
    public: false,

)
ServerMembership.create(server_id: Server2.id , user_id: KinKa.id)
ServerMembership.create(server_id: Server2.id , user_id: VictorH.id)
ServerMembership.create(server_id: Server2.id , user_id: Ayce.id)
ServerMembership.create(server_id: Server2.id , user_id: Spencer.id)
ServerMembership.create(server_id: Server2.id , user_id: Jwong.id)


Server3 = Server.create!(
    server_owner_id: Mr_Wumpus.id,
    server_name: "Bot Server", 
    public: false,
)
ServerMembership.create(server_id: Server3.id , user_id: Mr_Wumpus.id)
ServerMembership.create(server_id: Server3.id , user_id: Demouser2.id)
ServerMembership.create(server_id: Server3.id , user_id: Stacy.id)
ServerMembership.create(server_id: Server3.id , user_id: SpamUser1.id)
ServerMembership.create(server_id: Server3.id , user_id: SpamUser2.id)


Server4 = Server.create!(
    server_owner_id: Vivian.id,
    server_name: "Vivian server", 
    public: false,

)

ServerMembership.create(server_id: Server4.id , user_id: Vivian.id)
ServerMembership.create(server_id: Server4.id , user_id: Karen.id)
ServerMembership.create(server_id: Server4.id , user_id: VeraH.id)
ServerMembership.create(server_id: Server4.id , user_id: MadeleineP.id)
ServerMembership.create(server_id: Server4.id , user_id: Ayce.id)

Server5 = Server.create!(
    server_owner_id: MichaelR.id,
    server_name: "MichaelR Server", 
    public: false,

)

ServerMembership.create(server_id: Server5.id , user_id: MichaelR.id)
ServerMembership.create(server_id: Server5.id , user_id: KrystalR.id)
ServerMembership.create(server_id: Server5.id , user_id: EricB.id)
ServerMembership.create(server_id: Server5.id , user_id: David_allen.id)
ServerMembership.create(server_id: Server5.id , user_id: AlisherP.id)
ServerMembership.create(server_id: Server5.id , user_id: Vivian.id)
ServerMembership.create(server_id: Server5.id , user_id: Karen.id)
ServerMembership.create(server_id: Server5.id , user_id: VeraH.id)
ServerMembership.create(server_id: Server5.id , user_id: MadeleineP.id)