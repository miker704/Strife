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
# mr_Wumpus.photo.attach(io: File.open('app/assets/images/discord_Strife_logo.png'), filename:'discord_Strife_logo.png')

# StrifeMainServer = Server.create!(
#     server_owner_id: mr_Wumpus.id,
#     server_name: "Welcome to Strife", 
#     public: true
# )

# StrifeMainServer.server_Icon.attach(io: File.open('app/assets/images/loading.gif'), filename: 'loading.gif')
# ServerMembership.create(server_id: StrifeMainServer.id , user_id: mr_Wumpus.id)

# demo user 1
demouser1=User.create!(
    username: 'DemoUser1',
    email: 'DemoUser1@strife.com',
    birthday: Date.new(1996,02,25),
    password: 'qwerty1234',
)
demouser1.photo.attach(io: File.open('app/assets/images/loading.gif'), filename: 'loading.gif')
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

defaultServerChannel = Channel.create!(channel_name: "not_general" , server_id: defaultServer.id , channel_type:1)
defaultServerChannel = Channel.create!(channel_name: "general-voice Chat" , server_id: defaultServer.id , channel_type:2)



spencer = User.create(
    email: "Iascone@aa.com",
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
    email: "jwong@hhl.com",
    username: "Jwong",
    password: "Dancedancerevolution",
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




# temp test data

# demo user 1
test1=User.create!(
    username: 'Test1@1.com',
    email: 'Test1@1.com',
    birthday: Date.new(1996,02,25),
    password: 'Test1@1.com',
)

test2=User.create!(
    username: "test1@g.com",
    email: "test1@g.com",
    birthday: Date.new(1996,02,25),
    password: "test1@g.com",
)


test3=User.create!(
    username: "testuser1234@gmail.com",
    email: "testuser1234@gmail.com",
    birthday: Date.new(1996,02,25),
    password: "testuser1234@gmail.com",
)


test4=User.create!(
    username: "testuser12345@gmail.com",
    email: "testuser12345@gmail.com",
    birthday: Date.new(1996,02,25),
    password: "testuser12345@gmail.com",
)

spamUser1 =User.create!(username: "spamuser@gmail.com", email: "spamuser@gmail.com", password: "spamuser@gmail.com", birthday: Date.new(1990,03,10),)
spamUser2 =User.create!(username: "spamuser1@gmail.com", email: "spamuser1@gmail.com", password: "spamuser1@gmail.com", birthday: Date.new(1990,03,10),)


testserver1 = Server.create!(
    server_owner_id: test1.id,
    server_name: "test1@1.com server", 
    public: true

)


testserver2 = Server.create!(
    server_owner_id: test2.id,
    server_name: "test1@g.com server", 
    public: true

)

testserver3 = Server.create!(
    server_owner_id: test3.id,
    server_name: "testuser1234@gmail.com server", 
    public: true

)

testserver4 = Server.create!(
    server_owner_id: test4.id,
    server_name: "testuser12345@gmail.com server", 
    public: true

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

MichaelR = User.create!(username: "MichaelR", email: "mikeR@strife.com", password: "Qwerty1234", birthday: Date.new(1996,10,10))
KrystalR = User.create!(username: "KrystalR", email: "KrystalR@strife.com", password: "Qwerty1234", birthday: Date.new(1997,8,10))

vivian = User.create!(username: "Vivian", email: "vivianC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
mikeC = User.create!(username: "MichaelC", email: "mikeC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
MikeH = User.create!(username: "MichaelH", email: "MikeH@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
VeraH = User.create!(username: "Vera", email: "VeraH@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
EricB = User.create!(username: "Eric", email: "EricB@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
EvanF = User.create!(username: "Evan", email: "EvanF@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
AlanN = User.create!(username: "Alan", email: "AlanNg@strife.com", password: "AlanNg4TA", birthday: Date.new(1990,03,10))
LinS = User.create!(username: "LinShen", email: "LinS@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
KevinN = User.create!(username: "Kevin", email: "KevinN@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
madeleineP = User.create!(username: "Madeleine", email: "madeleineP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
TomLL = User.create!(username: "Tom", email: "TomLL@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
Leo = User.create!(username: "Leo", email: "LeoC@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
Karen = User.create!(username: "Karen", email: "KarenP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
Gabriel = User.create!(username: "Gabriel", email: "GabrielG@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
David_allen = User.create!(username: "David-allen", email: "David-allen@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
DavidZ = User.create!(username: "DavidZ", email: "DavidZ@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
nikhilK = User.create!(username: "Nikhil", email: "nikhilK@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
NaranI = User.create!(username: "Naran", email: "NaranI@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
DuncanM = User.create!(username: "Duncan", email: "DuncanM@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))
AlisherP = User.create!(username: "Alisher", email: "AlisherP@strife.com", password: "Qwerty1234", birthday: Date.new(1990,03,10))

#test users

bambi = User.create!(username: "bambi", email: "bambi@gmail.com", password: "bambi@gmail.com", birthday: Date.new(1990,03,10))

trish = User.create!(username: "trish@gmail.com", email: "trish@gmail.com", password: "trish@gmail.com", birthday: Date.new(1990,03,10))
rae=User.create!(username: "rae@gmail.com", email: "rae@gmail.com", password: "rae@gmail.com", birthday: Date.new(1990,03,10))
baatu=User.create!(username: "baatu@gmail.com", email: "baatu@gmail.com", password: "baatu@gmail.com", birthday: Date.new(1990,03,10))
cindy=User.create!(username: "cindy@gmail.com", email: "cindy@gmail.com", password: "cindy@gmail.com", birthday: Date.new(1990,03,10))
nora=User.create!(username: "nora@gmail.com", email: "nora@gmail.com", password: "nora@gmail.com", birthday: Date.new(1990,03,10))
ame=User.create!(username: "ame@gmail.com", email: "ame@gmail.com", password: "ame@gmail.com", birthday: Date.new(1990,03,10))


vinnie=User.create!(username: "vinnie@gmail.com", email: "vinnie@gmail.com", password: "vinnie@gmail.com", birthday: Date.new(1990,03,10))
carly=User.create!(username: "carly@gmail.com", email: "carly@gmail.com", password: "carly@gmail.com", birthday: Date.new(1990,03,10))
ruru=User.create!(username: "ruru@gmail.com", email: "ruru@gmail.com", password: "ruru@gmail.com", birthday: Date.new(1990,03,10))
danny=User.create!(username: "danny@gmail.com", email: "danny@gmail.com", password: "danny@gmail.com", birthday: Date.new(1990,03,10))

dee=User.create!(username: "dee@gmail.com", email: "dee@gmail.com", password: "dee@gmail.com", birthday: Date.new(1990,03,10))
will=User.create!(username: "will@gmail.com", email: "will@gmail.com", password: "will@gmail.com", birthday: Date.new(1990,03,10))

bald=User.create!(username: "baldstie@gmail.com", email: "baldstie@gmail.com", password: "baldstie@gmail.com", birthday: Date.new(1990,03,10))
jenny=User.create!(username: "jenny@gmail.com", email: "jenny@gmail.com", password: "jenny@gmail.com", birthday: Date.new(1990,03,10))
lumi=User.create!(username: "lumi@gmail.com", email: "lumi@gmail.com", password: "lumi@gmail.com", birthday: Date.new(1990,03,10))


#friends
f1 = Friendship.create!(friend_id: demouser2.id, user_id: demouser1.id, friend_request_status: 3);
f2 = Friendship.create!(friend_id: demouser1.id, user_id: demouser2.id, friend_request_status: 3);
f3 = Friendship.create!(friend_id: stacy.id, user_id: demouser1.id, friend_request_status: 3);
f4 = Friendship.create!(friend_id: demouser1.id, user_id: stacy.id, friend_request_status: 3);

# f5 = Friendship.create!(friend_id: mr_Wumpus.id, user_id: demouser1.id, friend_request_status: 3);
# f6 = Friendship.create!(friend_id: demouser1.id, user_id: mr_Wumpus.id, friend_request_status: 3);
 Friendship.create!(friend_id: spencer.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: spencer.id, friend_request_status: 3);
 Friendship.create!(friend_id: kinKa.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: kinKa.id, friend_request_status: 3);
 Friendship.create!(friend_id: jwong.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: jwong.id, friend_request_status: 3);
 Friendship.create!(friend_id: trish.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: trish.id, friend_request_status: 3);
 Friendship.create!(friend_id: cindy.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: cindy.id, friend_request_status: 3);
 Friendship.create!(friend_id: nora.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: nora.id, friend_request_status: 3);
 Friendship.create!(friend_id: ame.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: ame.id, friend_request_status: 3);
 Friendship.create!(friend_id: carly.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: carly.id, friend_request_status: 3);

 Friendship.create!(friend_id: lumi.id, user_id: demouser1.id, friend_request_status: 3);
 Friendship.create!(friend_id: demouser1.id, user_id: lumi.id, friend_request_status: 3);



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

f7 = Friendship.create!(friend_id: KrystalR.id, user_id: MichaelR.id, friend_request_status: 3);
f8 = Friendship.create!(friend_id: MichaelR.id, user_id: KrystalR.id, friend_request_status: 3);


#blockusers
f5 = Friendship.create!(friend_id: spamUser1.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: spamUser2.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: rae.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: baatu.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: ruru.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: danny.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: dee.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: will.id, user_id: demouser1.id, friend_request_status: -1);
Friendship.create!(friend_id: bald.id, user_id: demouser1.id, friend_request_status: -1);