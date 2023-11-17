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

# Strife Bot - mr.wumpus

Mr_Wumpus = User.create!(
  username: 'Mr.Wumpus',
  email: 'wumbo@strife.com',
  birthday: Date.new(1996, 0o2, 25),
  password: 'wumboing',
  color_tag: 10,
  strife_id_tag: 0o001,
  online: true
)
Mr_Wumpus.photo.attach(io: File.open('app/assets/images/discord_Strife_logo.png'), filename: 'discord_Strife_logo.png')
Mr_Wumpus.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/strifeLogobannerWumpus.PNG'), filename:'strifeLogobannerWumpus.PNG')

StrifeMainServer = Server.create!(
  server_owner_id: Mr_Wumpus.id,
  server_name: 'Welcome To $TR!F3',
  public: true
)
StrifeMainServer.server_Icon.attach(io: File.open('app/assets/images/wumpus_Strife_logo.png'),
                                    filename: 'wumpus_Strife_logo.png')
StrifeMainServer.server_banner.attach(io: File.open('app/assets/images/strifeLogobannerWumpus.PNG'),
                                    filename: 'strifeLogobannerWumpus.PNG')                       
StrifeMainServer.invite_splash.attach(io: File.open('app/assets/images/strifeLogobannerWumpus.PNG'),
                                    filename: 'strifeLogobannerWumpus.PNG')                                                      
ServerMembership.create(server_id: StrifeMainServer.id, user_id: Mr_Wumpus.id)

Message.create(channel_id: StrifeMainServer.channels.first.id, author_id: Mr_Wumpus.id,
               body: 'Hello Welcome To $TR!F3 this server is for your introduction to $TR!F3 and discover friends to start conversations with once your good and ready its recommended you leave this server')
Message.create(channel_id: StrifeMainServer.channels.first.id, author_id: Mr_Wumpus.id,
               body: 'You can invite your friends to your Server and start chatting, you can also create or delete channels if you wish!')
Message.create(channel_id: StrifeMainServer.channels.first.id, author_id: Mr_Wumpus.id,
               body: "Please Note That even though you maybe able to create and access voice channels, other members cannot, $TR!F3 N!TR0 is required to allow members of your server and yourself access to voice channels.
    Voice Calls are not available without $TR!F3 N!TR0")
Message.create(channel_id: StrifeMainServer.channels.first.id, author_id: Mr_Wumpus.id,
               body: 'If you are Browsing with a Demo Account You will not be able to access User Authorization Settings such as password changing etc. Please make your own account to access those features of $TR!F3.
        Also When using a Demo Account you will be able to see private servers on the explore servers section of $TR!F3.
        you will still need an invite code to join a private server which can be done by submiting the invite code in the join server page in create a server
        Please note USING YOUR OWN ACCOUNT WILL NOT REVEAL PRIVATE SERVERS IN THE EXPLORE SERVERS PAGE!
        You will have to attain the invite code normally, however the join process will still be the same.
        Welcome to $TR!F3 Hope You Enjoy It - R3J3XT!0N (Michael Ramoutar) Creator of $TR!F3.')
Message.create(channel_id: StrifeMainServer.channels.first.id, author_id: Mr_Wumpus.id,
          body: 'Please note that all media assets in this app are property of Discord, other Artists, and myself.')
Message.create(channel_id: StrifeMainServer.channels.first.id, author_id: Mr_Wumpus.id,
            body: 'Please note that this app aims to be almost up to date with the initial facing features of Discord.')          
# demo user 1
Demouser1 = User.create!(
  username: 'DemoUser1',
  email: 'DemoUser1@strife.com',
  birthday: Date.new(1996, 0o2, 25),
  password: 'qwerty1234',
  phone_number: '+17185557894'
)
Demouser1.photo.attach(io: File.open('app/assets/images/loading.gif'), filename: 'loading.gif')
Demouser1.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/quiet.jpg'), filename:'quiet.jpg')
# demo user 2
Demouser2 = User.create!(
  username: 'DemoUser2',
  email: 'DemoUser2@strife.com',
  password: 'QWERTY1234',
  birthday: Date.new(1997, 0o3, 10),
  phone_number: '+17185557890'
)
Demouser2.photo.attach(io: File.open('app/assets/images/strife_spider.png'), filename: 'strife_spider.png')
Demouser2.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/purpleElectricStorm.gif'), filename:'purpleElectricStorm.gif')
Stacy = User.create!(
  username: 'Stacy',
  email: 'Demo56@strife.com',
  password: 'QWERTY1234',
  birthday: Date.new(1990, 0o3, 10),
  phone_number: '+17185557891',
  online: true
)
Stacy.photo.attach(io: File.open('app/assets/images/strife_spider_quad.png'), filename: 'strife_spider_quad.png')
Stacy.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/animebunny.jpg'), filename:'animebunny.jpg')
DefaultServer = Server.create!(
  server_owner_id: Demouser1.id,
  server_name: 'Demo Server',
  public: true
)
DefaultServer.server_Icon.attach(io: File.open('app/assets/images/discord_Strife_logo.png'),
                                    filename: 'discord_Strife_logo.png')
DefaultServer.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/moving-blue-flames.gif'),
                                    filename: 'moving-blue-flames.gif')                       
DefaultServer.invite_splash.attach(io: File.open('app/assets/images/banners/server_banners/moving-blue-flames.gif'),
                                    filename: 'moving-blue-flames.gif')      
# use channels.first to create message in server general channel
Message.create(channel_id: DefaultServer.channels.first.id, author_id: Mr_Wumpus.id,
               body: 'Hello There Vistor Welcome! You can invite your friends to your Server and start chatting, you can also create or delete channels if you wish!')
Message.create(channel_id: DefaultServer.channels.first.id, author_id: Mr_Wumpus.id,
               body: "Please Note That even though you maybe able to create and access voice channels, other members cannot, $TR!F3 N!TR0 is required to allow members of your server and yourself access to voice channels.
    Voice Calls are not available without $TR!F3 N!TR0.")

DefaultServerChannel = Channel.create!(channel_name: 'not_general', server_id: DefaultServer.id, channel_type: 1)
Message.create(channel_id: DefaultServerChannel.id, author_id: Mr_Wumpus.id,
               body: 'Hello There Vistor Welcome! You can invite your friends to your Server and start chatting, you can also create or delete channels if you wish!')
Message.create(channel_id: DefaultServerChannel.id, author_id: Mr_Wumpus.id,
               body: "Please Note That even though you maybe able to create and access voice channels, other members cannot, $TR!F3 N!TR0 is required to allow members of your server and yourself access to voice channels.
    Voice Calls are not available without $TR!F3 N!TR0.")

DefaultServerVoiceChannel = Channel.create!(channel_name: 'general-voice Chat', server_id: DefaultServer.id,
                                            channel_type: 2)

DemoChannel = Channel.create!(channel_name: 'Demo Channel', server_id: DefaultServer.id, channel_type: 1)
Message.create(channel_id: DemoChannel.id, author_id: Demouser1.id, body: 'Beep....Boo..Boo..Beep!')
Message.create(channel_id: DemoChannel.id, author_id: Mr_Wumpus.id, body: '@Demouser1 !')
Message.create(channel_id: DemoChannel.id, author_id: Demouser1.id, body: 'yes ? ')
Message.create(channel_id: DemoChannel.id, author_id: Mr_Wumpus.id,
               body: 'Stop beeping someone is visiting $TR!F3! act normal no one must know we are robots! beep!')
Message.create(channel_id: DemoChannel.id, author_id: Demouser1.id, body: 'I cant Stop Beep....Boo..Boo..Beep!')
Message.create(channel_id: DemoChannel.id, author_id: Mr_Wumpus.id,
               body: 'Stop beeping someone is here Delete the messages!')
Message.create(channel_id: DemoChannel.id, author_id: Demouser1.id, body: 'I cant Beeep..boop..bahp.')
Message.create(channel_id: DemoChannel.id, author_id: Mr_Wumpus.id,
               body: 'You Have Admin privileges to delete it! your the creator of the message! You can Delete It!')
Message.create(channel_id: DemoChannel.id, author_id: Mr_Wumpus.id, body: 'Click on the trash Icon near the message!')

Spencer = User.create(
  email: 'Iascone@aa.com',
  username: 'Iascone',
  password: 'greatTA4aa',
  birthday: Date.new(1990, 0o3, 10),
  phone_number: '+17185557892',
  online: true
)

Ayce = User.create(
  email: 'ayce@aa.com',
  username: 'Ayce Machine',
  password: '12348hello',
  birthday: Date.new(1990, 0o3, 10),
  phone_number: '+17185557893'
)
Ayce.photo.attach(io: File.open('app/assets/images/AnimeGirlHeadPhones.jpg'), filename:'AnimeGirlHeadPhones.jpg')
Ayce.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/flowers.jpg'), filename:'flowers.jpg')
Jwong = User.create(
  email: 'jwong@hhl.com',
  username: 'Jwong',
  password: 'Dancedancerevolution',
  birthday: Date.new(1990, 0o3, 10),
  phone_number: '+17185557896'
)

KinKa = User.create!(
  username: 'burgerkinka',
  email: 'kinka@kinka.com',
  password: '123456789',
  birthday: Date.new(1990, 0o3, 10),
  phone_number: '+17185557897',
  online: true
)
KinKa.photo.attach(io: File.open('app/assets/images/faceManAvatar.png'), filename:'faceManAvatar.png')
KinKa.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/faceMan.gif'), filename:'faceMan.gif')

KinKaServer = Server.create!(
  server_owner_id: KinKa.id,
  server_name: 'Kin Ka Attendance',
  public: true
)
KinKaServer.server_Icon.attach(io: File.open('app/assets/images/appacc.png'), filename: 'appacc.png')
KinKaServer.server_banner.attach(io: File.open('app/assets/images/banners/user_banners/dragonbanner.jpg'),
                           filename: 'dragonbanner.jpg')        
Message.create(channel_id: KinKaServer.channels.first.id, author_id: KinKa.id,
               body: 'Hi Welcome to Our Server This will be for attendance and our Circle Time visit KinKaCircle everyday @ 5:30pm for attendance and Circle Time discussion.')

AyceServer = Server.create!(
  server_owner_id: Ayce.id,
  server_name: 'Ayce Attendance',
  public: true
)
AyceServer.server_Icon.attach(io: File.open('app/assets/images/appacc.png'), filename: 'appacc.png')
AyceServer.server_banner.attach(io: File.open('app/assets/images/banners/user_banners/archangel.jpg'),
                           filename: 'archangel.jpg')        
Message.create(channel_id: AyceServer.channels.first.id, author_id: Ayce.id,
               body: 'Hi Welcome to Our Server This will be for attendance and our Circle Time visit AyceCircle everyday @ 5:30pm for attendance and Circle Time discussion.')

Server1 = Server.create!(
  server_owner_id: Demouser1.id,
  server_name: 'Server1',
  public: true
)
Server1Channel = Channel.create!(channel_name: 'Hello World', server_id: Server1.id, channel_type: 1)
Message.create(channel_id: Server1Channel.id, author_id: Mr_Wumpus.id,
               body: 'Hello There Vistor Welcome! You can invite your friends to your Server and start chatting, you can also create or delete channels if you wish!')
Message.create(channel_id: Server1Channel.id, author_id: Mr_Wumpus.id,
               body: "Please Note That even though you maybe able to create and access voice channels, other members cannot,
        $TR!F3 N!TR0 is required to allow members of your server and yourself access to voice channels.
        Voice Calls are not available without $TR!F3 N!TR0.")

KinKaCircle = Channel.create!(channel_name: "Kin Ka's Circle", server_id: KinKaServer.id, channel_type: 1)
KinKaCircleVoice = Channel.create!(channel_name: "Kin Ka's Circle Voice Chat", server_id: KinKaServer.id,
                                   channel_type: 2)

AyceCircle = Channel.create!(channel_name: "Ayce's Circle", server_id: AyceServer.id, channel_type: 1)
AyceCircleVoice = Channel.create!(channel_name: "Ayce's Circle Voice Chat", server_id: AyceServer.id, channel_type: 2)

ServerMembership.create(server_id: AyceServer.id, user_id: Demouser1.id)
ServerMembership.create(server_id: AyceServer.id, user_id: Demouser2.id)
ServerMembership.create(server_id: AyceServer.id, user_id: KinKa.id)
ServerMembership.create(server_id: AyceServer.id, user_id: Spencer.id)
ServerMembership.create(server_id: AyceServer.id, user_id: Stacy.id)

Message.create(channel_id: AyceCircle.id, author_id: Demouser1.id, body: 'hello?')
Message.create(channel_id: AyceCircle.id, author_id: Demouser2.id, body: 'hell0!')
Message.create(channel_id: AyceCircle.id, author_id: Demouser1.id, body: 'hello?')
Message.create(channel_id: AyceCircle.id, author_id: Demouser2.id, body: 'hell0!')
Message.create(channel_id: AyceCircle.id, author_id: Demouser1.id, body: 'hello?')
Message.create(channel_id: AyceCircle.id, author_id: Demouser2.id, body: 'hell0!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'attendance time!')
Message.create(channel_id: AyceCircle.id, author_id: KinKa.id, body: 'demo1!?')

Dm_server_1 = DmServer.create!(owner_id: Demouser1.id)
Dm_server_2 = DmServer.create!(owner_id: Demouser1.id)
Dm_server_3 = DmServer.create!(owner_id: Demouser1.id)

Dm_membership_1 = DmMember.create!(dm_server_id: Dm_server_1.id, dm_member_id: Demouser1.id)
Dm_membership_2 = DmMember.create!(dm_server_id: Dm_server_1.id, dm_member_id: Demouser2.id)
Dm_membership_3 = DmMember.create!(dm_server_id: Dm_server_2.id, dm_member_id: Demouser1.id)
Dm_membership_4 = DmMember.create!(dm_server_id: Dm_server_2.id, dm_member_id: Stacy.id)
Dm_membership_5 = DmMember.create!(dm_server_id: Dm_server_3.id, dm_member_id: Demouser1.id)
Dm_membership_6 = DmMember.create!(dm_server_id: Dm_server_3.id, dm_member_id: Ayce.id)

DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Mr_Wumpus.id,
                  body: 'This is the beginning of your direct message history with')
DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Demouser2.id,
                  body: 'You should apply to App Academy. You would be a great software engineer.')
DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Demouser1.id,
                  body: 'Will do. Thanks for the advice and motivation.')
DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Demouser1.id,
                  body: 'Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man.')
DmMessage.create!(dm_server_id: Dm_server_1.id, sender_id: Demouser2.id, body: 'Congrats!')

DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Mr_Wumpus.id,
                  body: 'This is the beginning of your direct message history with')
DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Stacy.id,
                  body: 'You should apply to App Academy. You would be a great software engineer.')
DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Demouser1.id,
                  body: 'Will do. Thanks for the advice and motivation.')
DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Demouser1.id,
                  body: 'Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man.')
DmMessage.create!(dm_server_id: Dm_server_2.id, sender_id: Stacy.id, body: 'Congrats!')

DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Mr_Wumpus.id,
                  body: 'This is the beginning of your direct message history with')
DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Ayce.id,
                  body: 'You should apply to App Academy. You would be a great software engineer.')
DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Demouser1.id,
                  body: 'Will do. Thanks for the advice and motivation.')
DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Demouser1.id,
                  body: 'Just wanted to update you. I have finished App Academy. It was hard, but fun. Thanks for all the support man.')
DmMessage.create!(dm_server_id: Dm_server_3.id, sender_id: Ayce.id, body: 'Congrats!')

SpamUser1 = User.create!(
  username: 'spamuser',
  email: 'spamuser@strife.com',
  password: 'spamuser@strife.com',
  birthday: Date.new(1990, 0o3, 10),
  phone_number: '+17185657894'
)

SpamUser2 = User.create!(
  username: 'spamuser1',
  email: 'spamuser1@strife.com',
  password: 'spamuser1@strife.com',
  birthday: Date.new(1990, 0o3, 10),
  phone_number: '+17285527894'
)

Dm_server_4 = DmServer.create!(owner_id: Demouser1.id)
Dm_server_5 = DmServer.create!(owner_id: Demouser1.id)
Dm_membership_7 = DmMember.create!(dm_server_id: Dm_server_4.id, dm_member_id: Demouser1.id)
Dm_membership_8 = DmMember.create!(dm_server_id: Dm_server_4.id, dm_member_id: Demouser2.id)
Dm_membership_9 = DmMember.create!(dm_server_id: Dm_server_4.id, dm_member_id: Stacy.id)
Dm_membership_10 = DmMember.create!(dm_server_id: Dm_server_5.id, dm_member_id: Demouser1.id)
Dm_membership_11 = DmMember.create!(dm_server_id: Dm_server_5.id, dm_member_id: Spencer.id)
DmMessage.create!(dm_server_id: Dm_server_4.id, sender_id: Mr_Wumpus.id,
                  body: 'Welcome to the beginning of your Group Chat')
DmMessage.create!(dm_server_id: Dm_server_4.id, sender_id: Stacy.id,
                  body: 'You should apply to App Academy. You would be a great software engineer.')
DmMessage.create!(dm_server_id: Dm_server_4.id, sender_id: Demouser1.id,
                  body: 'Will do. Thanks for the advice and motivation.')
DmMessage.create!(dm_server_id: Dm_server_4.id, sender_id: Demouser2.id, body: 'Hi!.')
DmMessage.create!(dm_server_id: Dm_server_5.id, sender_id: Mr_Wumpus.id,
                  body: 'This is the beginning of your direct message history with')
DmMessage.create!(dm_server_id: Dm_server_5.id, sender_id: Spencer.id,
                  body: 'You should apply to App Academy. You would be a great software engineer.')
DmMessage.create!(dm_server_id: Dm_server_5.id, sender_id: Demouser1.id,
                  body: 'Will do. Thanks for the advice and motivation.')

# data  for seeding users (Reserved)

MichaelR = User.create!(
  username: 'MichaelR',
  email: 'mikeR@strife.com',
  password: 'Qwerty1234',
  birthday: Date.new(1996, 10, 10),
  phone_number: '+17185520000',
  online: true
)
MichaelR.photo.attach(io: File.open('app/assets/images/regexIconb.png'), filename: 'regexIconb.png')
MichaelR.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/yagyuu_senran_kagura_banner.jpg'), filename:'yagyuu_senran_kagura_banner.jpg')

KrystalR = User.create!(username: 'KrystalR', email: 'KrystalR@strife.com', password: 'Qwerty1234',
                        birthday: Date.new(1997, 8, 10), phone_number: '+17185520001', online: true)
KrystalR.photo.attach(io: File.open('app/assets/images/yagyuu_senran_kagura_avatar.jpg'), filename: 'yagyuu_senran_kagura_avatar.jpg')
KrystalR.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/yagyuu_senran_kagura_banner.jpg'), filename:'yagyuu_senran_kagura_banner.jpg')


Vivian = User.create!(username: 'Vivian', email: 'vivianC@strife.com', password: 'Qwerty1234',
                      birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520002', online: true)
Vivian.photo.attach(io: File.open('app/assets/images/zoneTanAvatar.png'), filename: 'zoneTanAvatar.png')
Vivian.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/zonetandesktop.gif'), filename:'zonetandesktop.gif')


MikeC = User.create!(username: 'MichaelC', email: 'MikeC@strife.com', password: 'Qwerty1234',
                     birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520003')
MikeH = User.create!(username: 'MichaelH', email: 'MikeH@strife.com', password: 'Qwerty1234',
                     birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520004')
VeraH = User.create!(username: 'Vera', email: 'VeraH@strife.com', password: 'Qwerty1234',
                     birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520005')
EricB = User.create!(username: 'Eric', email: 'EricB@strife.com', password: 'Qwerty1234',
                     birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520006')
EvanF = User.create!(username: 'Evan', email: 'EvanF@strife.com', password: 'Qwerty1234',
                     birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520007')
AlanN = User.create!(username: 'Alan', email: 'AlanNg@strife.com', password: 'AlanNg4TA',
                     birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520008', online: true)
LinS = User.create!(username: 'LinShen', email: 'LinS@strife.com', password: 'Qwerty1234',
                    birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520009')
KevinN = User.create!(username: 'Kevin', email: 'KevinN@strife.com', password: 'Qwerty1234',
                      birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520010')
MadeleineP = User.create!(username: 'Madeleine', email: 'MadeleineP@strife.com', password: 'Qwerty1234',
                          birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520011')
TomLL = User.create!(username: 'Tom', email: 'TomLL@strife.com', password: 'Qwerty1234', birthday: Date.new(1990, 0o3, 10),
                     phone_number: '+17185520012')
Leo = User.create!(username: 'Leo', email: 'LeoC@strife.com', password: 'Qwerty1234', birthday: Date.new(1990, 0o3, 10),
                   phone_number: '+17185520013', online: true)
Karen = User.create!(username: 'Karen', email: 'KarenP@strife.com', password: 'Qwerty1234',
                     birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520014')
Karen.photo.attach(io: File.open('app/assets/images/banners/user_banners/sunflowers.jpg'), filename: 'sunflowers.jpg')
Karen.user_Banner.attach(io: File.open('app/assets/images/banners/user_banners/shooting.gif'), filename:'shooting.gif')                     
Gabriel = User.create!(username: 'Gabriel', email: 'GabrielG@strife.com', password: 'Qwerty1234',
                       birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520015', online: true)
David_allen = User.create!(username: 'David-allen', email: 'David-allen@strife.com', password: 'Qwerty1234',
                           birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520016', online: true)
DavidZ = User.create!(username: 'DavidZ', email: 'DavidZ@strife.com', password: 'Qwerty1234',
                      birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520018')
NikhilK = User.create!(username: 'Nikhil', email: 'NikhilK@strife.com', password: 'Qwerty1234',
                       birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520019')
NaranI = User.create!(username: 'Naran', email: 'NaranI@strife.com', password: 'Qwerty1234',
                      birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520022')
DuncanM = User.create!(username: 'Duncan', email: 'DuncanM@strife.com', password: 'Qwerty1234',
                       birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520023')
AlisherP = User.create!(username: 'Alisher', email: 'AlisherP@strife.com', password: 'Qwerty1234',
                        birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520024')
VictorH = User.create!(username: 'Victor', email: 'VictorH@strife.com', password: 'Qwerty1234',
                       birthday: Date.new(1990, 0o3, 10), phone_number: '+17185520025', online: true)

# friends

Friendship.create!(friend_id: Demouser2.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: Demouser2.id, friend_request_status: 3)
Friendship.create!(friend_id: Stacy.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: Stacy.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: KrystalR.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: KrystalR.id, friend_request_status: 3)
Friendship.create!(friend_id: Vivian.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: Vivian.id, friend_request_status: 3)
Friendship.create!(friend_id: AlanN.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: AlanN.id, friend_request_status: 3)
Friendship.create!(friend_id: TomLL.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: TomLL.id, friend_request_status: 3)
Friendship.create!(friend_id: Karen.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: Karen.id, friend_request_status: 3)
Friendship.create!(friend_id: Gabriel.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: Gabriel.id, friend_request_status: 3)
Friendship.create!(friend_id: David_allen.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: David_allen.id, friend_request_status: 3)
Friendship.create!(friend_id: NikhilK.id, user_id: Demouser1.id, friend_request_status: 3)
Friendship.create!(friend_id: Demouser1.id, user_id: NikhilK.id, friend_request_status: 3)

Friendship.create!(friend_id: Demouser2.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Demouser2.id, friend_request_status: 3)
Friendship.create!(friend_id: Stacy.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Stacy.id, friend_request_status: 3)
Friendship.create!(friend_id: Vivian.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Vivian.id, friend_request_status: 3)
Friendship.create!(friend_id: MikeC.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: MikeC.id, friend_request_status: 3)
Friendship.create!(friend_id: MikeH.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: MikeH.id, friend_request_status: 3)
Friendship.create!(friend_id: VeraH.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: VeraH.id, friend_request_status: 3)
Friendship.create!(friend_id: EricB.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: EricB.id, friend_request_status: 3)
Friendship.create!(friend_id: EvanF.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: EvanF.id, friend_request_status: 3)
Friendship.create!(friend_id: AlanN.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: AlanN.id, friend_request_status: 3)
Friendship.create!(friend_id: LinS.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: LinS.id, friend_request_status: 3)
Friendship.create!(friend_id: KevinN.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: KevinN.id, friend_request_status: 3)
Friendship.create!(friend_id: MadeleineP.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: MadeleineP.id, friend_request_status: 3)
Friendship.create!(friend_id: TomLL.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: TomLL.id, friend_request_status: 3)
Friendship.create!(friend_id: Leo.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Leo.id, friend_request_status: 3)
Friendship.create!(friend_id: Karen.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Karen.id, friend_request_status: 3)
Friendship.create!(friend_id: Gabriel.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Gabriel.id, friend_request_status: 3)
Friendship.create!(friend_id: David_allen.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: David_allen.id, friend_request_status: 3)
Friendship.create!(friend_id: DavidZ.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: DavidZ.id, friend_request_status: 3)
Friendship.create!(friend_id: NikhilK.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: NikhilK.id, friend_request_status: 3)
Friendship.create!(friend_id: NaranI.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: NaranI.id, friend_request_status: 3)
Friendship.create!(friend_id: DuncanM.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: DuncanM.id, friend_request_status: 3)
Friendship.create!(friend_id: AlisherP.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: AlisherP.id, friend_request_status: 3)
Friendship.create!(friend_id: KrystalR.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: KrystalR.id, friend_request_status: 3)
Friendship.create!(friend_id: Spencer.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Spencer.id, friend_request_status: 3)
Friendship.create!(friend_id: VictorH.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: VictorH.id, friend_request_status: 3)
Friendship.create!(friend_id: Jwong.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Jwong.id, friend_request_status: 3)
Friendship.create!(friend_id: Ayce.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: Ayce.id, friend_request_status: 3)
Friendship.create!(friend_id: KinKa.id, user_id: MichaelR.id, friend_request_status: 3)
Friendship.create!(friend_id: MichaelR.id, user_id: KinKa.id, friend_request_status: 3)

# pending requests
Friendship.create!(friend_id: Ayce.id, user_id: Demouser1.id, friend_request_status: 2)
Friendship.create!(friend_id: Demouser1.id, user_id: Ayce.id, friend_request_status: 1)
Friendship.create!(friend_id: KinKa.id, user_id: Demouser1.id, friend_request_status: 1)
Friendship.create!(friend_id: Demouser1.id, user_id: KinKa.id, friend_request_status: 2)
Friendship.create!(friend_id: Spencer.id, user_id: Demouser1.id, friend_request_status: 1)
Friendship.create!(friend_id: Demouser1.id, user_id: Spencer.id, friend_request_status: 2)
Friendship.create!(friend_id: Jwong.id, user_id: Demouser1.id, friend_request_status: 1)
Friendship.create!(friend_id: Demouser1.id, user_id: Jwong.id, friend_request_status: 2)

# blockusers user blocked by demo user 1
Friendship.create!(friend_id: SpamUser1.id, user_id: Demouser1.id, friend_request_status: -1)
Friendship.create!(friend_id: Demouser1.id, user_id: SpamUser1.id, friend_request_status: -2)

Friendship.create!(friend_id: SpamUser2.id, user_id: Demouser1.id, friend_request_status: -1)
Friendship.create!(friend_id: Demouser1.id, user_id: SpamUser2.id, friend_request_status: -2)

Friendship.create!(friend_id: SpamUser1.id, user_id: MichaelR.id, friend_request_status: -1)
Friendship.create!(friend_id: MichaelR.id, user_id: SpamUser1.id, friend_request_status: -2)

Friendship.create!(friend_id: SpamUser2.id, user_id: MichaelR.id, friend_request_status: -1)
Friendship.create!(friend_id: MichaelR.id, user_id: SpamUser2.id, friend_request_status: -2)


# server memberships for attendance circles and app/acc servers
# Ayce attendance
ServerMembership.create(server_id: AyceServer.id, user_id: Vivian.id)
ServerMembership.create(server_id: AyceServer.id, user_id: EricB.id)
ServerMembership.create(server_id: AyceServer.id, user_id: LinS.id)
ServerMembership.create(server_id: AyceServer.id, user_id: KevinN.id)
ServerMembership.create(server_id: AyceServer.id, user_id: MadeleineP.id)
ServerMembership.create(server_id: AyceServer.id, user_id: TomLL.id)
ServerMembership.create(server_id: AyceServer.id, user_id: David_allen.id)
ServerMembership.create(server_id: AyceServer.id, user_id: NaranI.id)
ServerMembership.create(server_id: AyceServer.id, user_id: AlisherP.id)
ServerMembership.create(server_id: AyceServer.id, user_id: NikhilK.id)
ServerMembership.create(server_id: AyceServer.id, user_id: Spencer.id)
ServerMembership.create(server_id: AyceServer.id, user_id: Jwong.id)
ServerMembership.create(server_id: AyceServer.id, user_id: VictorH.id)
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Vivian?')
Message.create(channel_id: AyceCircle.id, author_id: Vivian.id, body: 'Here!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Eric?')
Message.create(channel_id: AyceCircle.id, author_id: EricB.id, body: 'Here!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Lin?')
Message.create(channel_id: AyceCircle.id, author_id: LinS.id, body: 'Here!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Kevin?')
Message.create(channel_id: AyceCircle.id, author_id: KevinN.id, body: 'Im Here!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Madeleine?')
Message.create(channel_id: AyceCircle.id, author_id: MadeleineP.id, body: 'Present!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Tom?')
Message.create(channel_id: AyceCircle.id, author_id: TomLL.id, body: 'Here! Sorry I was turning on my computer')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'David-Allen?')
Message.create(channel_id: AyceCircle.id, author_id: David_allen.id, body: 'Here! sorry my mic and camera isnt working')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Naran?')
Message.create(channel_id: AyceCircle.id, author_id: NaranI.id, body: 'Here!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Alisher?')
Message.create(channel_id: AyceCircle.id, author_id: AlisherP.id, body: 'Here!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id, body: 'Nikhil?')
Message.create(channel_id: AyceCircle.id, author_id: NikhilK.id, body: 'Here!')
Message.create(channel_id: AyceCircle.id, author_id: Ayce.id,
               body: 'Okay everyone good job go meet up with your project partners for the day and get started on todays work.')

# kinka attendace
ServerMembership.create(server_id: KinKaServer.id, user_id: VictorH.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: Ayce.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: Spencer.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: Jwong.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: MichaelR.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: MikeC.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: DuncanM.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: DavidZ.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: Gabriel.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: Leo.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: Karen.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: AlanN.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: EvanF.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: VeraH.id)
ServerMembership.create(server_id: KinKaServer.id, user_id: MikeH.id)

Message.create(channel_id: KinKaCircle.id, author_id: Demouser1.id, body: 'hello?')
Message.create(channel_id: KinKaCircle.id, author_id: KinKa.id, body: 'hello? taking attendance everyone!')
Message.create(channel_id: KinKaCircle.id, author_id: KinKa.id, body: 'Michael R?')
Message.create(channel_id: KinKaCircle.id, author_id: MichaelR.id, body: 'Here!')
Message.create(channel_id: KinKaCircle.id, author_id: KinKa.id, body: 'Alan!?')
Message.create(channel_id: KinKaCircle.id, author_id: AlanN.id, body: 'Here!')

# app/acc offical
Appaco = Server.create!(
  server_owner_id: KinKa.id,
  server_name: 'App Academy Campus',
  public: true
)
Appaco.server_Icon.attach(io: File.open('app/assets/images/appacc.png'), filename: 'appacc.png')
Appaco.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/codingBg.jpg'),
                           filename: 'codingBg.jpg')                                                        
ServerMembership.create(server_id: Appaco.id, user_id: KinKa.id)
ServerMembership.create(server_id: Appaco.id, user_id: Ayce.id)
ServerMembership.create(server_id: Appaco.id, user_id: Jwong.id)
ServerMembership.create(server_id: Appaco.id, user_id: Spencer.id)
ServerMembership.create(server_id: Appaco.id, user_id: VictorH.id)
ServerMembership.create(server_id: Appaco.id, user_id: MichaelR.id)
ServerMembership.create(server_id: Appaco.id, user_id: Vivian.id)
ServerMembership.create(server_id: Appaco.id, user_id: MikeC.id)
ServerMembership.create(server_id: Appaco.id, user_id: MikeH.id)
ServerMembership.create(server_id: Appaco.id, user_id: VeraH.id)
ServerMembership.create(server_id: Appaco.id, user_id: EricB.id)
ServerMembership.create(server_id: Appaco.id, user_id: EvanF.id)
ServerMembership.create(server_id: Appaco.id, user_id: AlanN.id)
ServerMembership.create(server_id: Appaco.id, user_id: LinS.id)
ServerMembership.create(server_id: Appaco.id, user_id: KevinN.id)
ServerMembership.create(server_id: Appaco.id, user_id: MadeleineP.id)
ServerMembership.create(server_id: Appaco.id, user_id: TomLL.id)
ServerMembership.create(server_id: Appaco.id, user_id: Leo.id)
ServerMembership.create(server_id: Appaco.id, user_id: Karen.id)
ServerMembership.create(server_id: Appaco.id, user_id: Gabriel.id)
ServerMembership.create(server_id: Appaco.id, user_id: David_allen.id)
ServerMembership.create(server_id: Appaco.id, user_id: DavidZ.id)
ServerMembership.create(server_id: Appaco.id, user_id: NikhilK.id)
ServerMembership.create(server_id: Appaco.id, user_id: NaranI.id)
ServerMembership.create(server_id: Appaco.id, user_id: DuncanM.id)
ServerMembership.create(server_id: Appaco.id, user_id: AlisherP.id)

Message.create(channel_id: Appaco.channels.first.id, author_id: KinKa.id,
               body: 'Hi Welcome to Our Server This will be for attendance, announcments and Course Schedule, and Help. Make Sure You check in for main attendance.')

WelcomeAndRules = Channel.create!(channel_name: 'Welcome and Server Rules', server_id: Appaco.id, channel_type: 1)
CampusAct = Channel.create!(channel_name: 'Course Schedule', server_id: Appaco.id, channel_type: 1)
Resourceandhelp = Channel.create!(channel_name: 'Resources and Help', server_id: Appaco.id, channel_type: 1)
MainAttendance = Channel.create!(channel_name: 'Main Attendance', server_id: Appaco.id, channel_type: 1)
ResourceandhelpLiveChat = Channel.create!(channel_name: 'Resources and Help Voice Chat', server_id: Appaco.id,
                                          channel_type: 2)

Message.create(channel_id: WelcomeAndRules.id, author_id: KinKa.id,
               body: 'Hello there! Welcome to the App Academy Server!')
Message.create(channel_id: WelcomeAndRules.id, author_id: KinKa.id, body: 'Here are the Rules Of Conduct')

Message.create(channel_id: WelcomeAndRules.id, author_id: KinKa.id,
               body: '1. Make sure you take attendance at your group circle servers 9am, 1pm and 5:30pm everyday!')
Message.create(channel_id: WelcomeAndRules.id, author_id: KinKa.id, body: '2. Be Respectful')
Message.create(channel_id: WelcomeAndRules.id, author_id: KinKa.id, body: '3. No Talking! or Texting in the Server!')
Message.create(channel_id: WelcomeAndRules.id, author_id: KinKa.id,
               body: '4. Keep Conversations on Topic use your own server if you wish to speak on off topic subjects')
Message.create(channel_id: WelcomeAndRules.id, author_id: KinKa.id,
               body: '5. We Hope you have a great time learning with us!')

Message.create(channel_id: CampusAct.id, author_id: KinKa.id,
               body: 'Hey There! This Channel is to provide you notice of the Course Schedule and what we will be learning in class')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'BootCamp Starts On - 3/28/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id,
               body: 'Software Fundementals - Remote Online - 3/28/22 - 4/11/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Beginner Ruby 3/22/22 - 4/14/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Ruby FA1-Practice - 3/31/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Ruby FA1 - 4/4/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Ruby FA2 - 4/11/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'On Campus In-Person Starts  - 4/12/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Intermediate Ruby - 4/12/22 - 4/25/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Ruby 1 Prep - 4/14/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Ruby 1 - 4/18/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Ruby 2 - 4/25/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Rails & SQL - 4/26/22 - 5/16/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Rails 1 - 5/3/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Rails Olympics - 5/9/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Rails 2 - 5/16/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'JavaScript - 5/17/22 - 5/26/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'JavaScript 1 - 5/26/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'JavaScript Project - 5/27/22 - 6/2/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id,
               body: 'JavaScript Project - Presentations - 6/2/22 @ 1:00pm')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'React 6/3/22 - 6/17/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'React 1 6/17/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Full Stack Project  6/17/22 - 7/1/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id,
               body: 'Full Stack Project - Presentations - 7/1/22 @ 9:15am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'MERN Project - 7/1/22 - 7/8/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id,
               body: 'MERN Project - Presentations - 7/8/22 @ 9:15am - 10:30am')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Job Search Prep - 7/8/22 - 7/15/22')
Message.create(channel_id: CampusAct.id, author_id: KinKa.id, body: 'Graduation - 7/15/22 @ 4:00pm')

Message.create(channel_id: Resourceandhelp.id, author_id: KinKa.id,
               body: 'Hey There! This Channel is to provide resources and help if you were too lazy.. im mean couldnt do your homework')
Message.create(channel_id: Resourceandhelp.id, author_id: KinKa.id, body: 'Come To Class on Time')
Message.create(channel_id: Resourceandhelp.id, author_id: KinKa.id, body: 'App/ac Learn')
Message.create(channel_id: Resourceandhelp.id, author_id: KinKa.id, body: 'HackerRank')
Message.create(channel_id: Resourceandhelp.id, author_id: KinKa.id, body: 'LeetCode')
Message.create(channel_id: Resourceandhelp.id, author_id: KinKa.id, body: 'Do your Homework')

Message.create(channel_id: MainAttendance.id, author_id: KinKa.id,
               body: 'Hello this channel is for main attendance be sure to check in here everyday @ 9:15am, 1:00pm, 5:30pm')

# app/ac unoffical

AppacStrife = Server.create!(
  server_owner_id: MichaelR.id,
  server_name: 'App/ac Cohort 3/2022',
  public: true
)
AppacStrife.server_Icon.attach(io: File.open('app/assets/images/Appacademylogo.png'), filename: 'Appacademylogo.png')
AppacStrife.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/htmlCodeBg.jpg'),
                           filename: 'htmlCodeBg.jpg')                       
ServerMembership.create(server_id: AppacStrife.id, user_id: MichaelR.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: KrystalR.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: Vivian.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: MikeC.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: MikeH.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: VeraH.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: EricB.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: EvanF.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: AlanN.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: LinS.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: KevinN.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: MadeleineP.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: TomLL.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: Leo.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: Karen.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: Gabriel.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: David_allen.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: DavidZ.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: NikhilK.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: NaranI.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: DuncanM.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: AlisherP.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: VictorH.id)
ServerMembership.create(server_id: AppacStrife.id, user_id: KinKa.id)

Message.create(channel_id: AppacStrife.channels.first.id, author_id: MichaelR.id,
               body: 'Hi Welcome to Our Server This will be for attendance, announcments and Course Schedule, and Help off Campus.')

Jobsearch = Channel.create!(channel_name: 'job search', server_id: AppacStrife.id, channel_type: 1)
Algo = Channel.create!(channel_name: 'dsa', server_id: AppacStrife.id, channel_type: 1)
RandomTopics = Channel.create!(channel_name: 'off-topic', server_id: AppacStrife.id, channel_type: 1)
AppacStrifeVoice = Channel.create!(channel_name: 'Voice Chat', server_id: AppacStrife.id, channel_type: 2)

Message.create(channel_id: Jobsearch.id, author_id: MichaelR.id, body: 'Post Job Stuff Here')
Message.create(channel_id: Jobsearch.id, author_id: DuncanM.id, body: 'Cool okay')
Message.create(channel_id: Jobsearch.id, author_id: Vivian.id, body: 'Thanks for making this channel')

Message.create(channel_id: Algo.id, author_id: MichaelR.id, body: 'Post DSA Stuff Here')
Message.create(channel_id: Algo.id, author_id: AlanN.id, body: 'LeetCode')
Message.create(channel_id: Algo.id, author_id: EricB.id, body: 'HackerRank')

Message.create(channel_id: RandomTopics.id, author_id: MichaelR.id, body: 'Post Memes Here')
Message.create(channel_id: RandomTopics.id, author_id: Vivian.id, body: 'kk')
Message.create(channel_id: RandomTopics.id, author_id: David_allen.id, body: 'thats funny you know what memes are?')

Server2 = Server.create!(
  server_owner_id: KinKa.id,
  server_name: 'App/ac - TA Server',
  public: false
)

Server2.server_Icon.attach(io: File.open('app/assets/images/appacc.png'), filename: 'appacc.png')
Server2.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/compCodeBg.jpg'),
                           filename: 'compCodeBg.jpg')                       

ServerMembership.create(server_id: Server2.id, user_id: KinKa.id)
ServerMembership.create(server_id: Server2.id, user_id: VictorH.id)
ServerMembership.create(server_id: Server2.id, user_id: Ayce.id)
ServerMembership.create(server_id: Server2.id, user_id: Spencer.id)
ServerMembership.create(server_id: Server2.id, user_id: Jwong.id)
TAChannel = Channel.create!(channel_name: 'Course Planning', server_id: Server2.id, channel_type: 1)
TAVoice = Channel.create!(channel_name: 'Voice Call', server_id: Server2.id, channel_type: 2)

Message.create(channel_id: AppacStrife.channels.first.id, author_id: KinKa.id,
               body: "Hi Welcome to Our Server This will be for APP Academy TA's discussing attendance, upcoming announcments and Course Schedule Report here daily.")
Message.create(channel_id: TAChannel.id, author_id: KinKa.id, body: "Okay What's the plans for classwork today?")
Message.create(channel_id: TAChannel.id, author_id: Ayce.id,
               body: '@Kinka We are going to introduce Meta Programming to the students today.')
Message.create(channel_id: TAChannel.id, author_id: KinKa.id, body: 'Great! @Spencer Your doing Lecture today Correct?')
Message.create(channel_id: TAChannel.id, author_id: Spencer.id, body: 'Yes. @Kinka')
Message.create(channel_id: TAChannel.id, author_id: VictorH.id,
               body: 'The Students are requesting help on progress tracker')
Message.create(channel_id: TAChannel.id, author_id: Jwong.id, body: "I'll take care of it, its Alan asking a question")

Server3 = Server.create!(
  server_owner_id: Mr_Wumpus.id,
  server_name: 'Bot Server',
  public: false
)
Server3.server_Icon.attach(io: File.open('app/assets/images/botservericon.png'), filename: 'botservericon.png')
Server3.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/matrix.gif'),
                           filename: 'matrix.gif')                       

ServerMembership.create(server_id: Server3.id, user_id: Mr_Wumpus.id)
ServerMembership.create(server_id: Server3.id, user_id: Demouser2.id)
ServerMembership.create(server_id: Server3.id, user_id: Stacy.id)
ServerMembership.create(server_id: Server3.id, user_id: SpamUser1.id)
ServerMembership.create(server_id: Server3.id, user_id: SpamUser2.id)
BotChannel = Channel.create!(channel_name: 'BOT CHANNEL', server_id: Server3.id, channel_type: 1)
BotChannelVoice = Channel.create!(channel_name: 'BOT VOICE CHAT', server_id: Server3.id, channel_type: 2)
Message.create(channel_id: Server3.channels.first.id, author_id: Mr_Wumpus.id,
               body: 'Hi Welcome to Our Server This will be for us $TR!F3 BOTS Report Here Daily for maintenance Beep..Boo..Boo.Beep.')

Message.create(channel_id: BotChannel.id, author_id: Mr_Wumpus.id,
               body: 'This is our channel to talk about .... Beep .. Boop.. Beep.. Beep...Pop')
Message.create(channel_id: BotChannel.id, author_id: Demouser2.id, body: 'Yes. Beep..Bo.Bo.Beep!')
Message.create(channel_id: BotChannel.id, author_id: Demouser1.id, body: 'Be....')
Message.create(channel_id: BotChannel.id, author_id: Stacy.id,
               body: 'What happend, to @Demouser1?, He just disappeared')
Message.create(channel_id: BotChannel.id, author_id: SpamUser1.id,
               body: 'Spam spam spam, looks like he was signed in someone is visiting $TR!F3!')
Message.create(channel_id: BotChannel.id, author_id: SpamUser2.id, body: 'SPAM SPAM SPAM')
Message.create(channel_id: BotChannel.id, author_id: Mr_Wumpus.id, body: 'Quick Everyone back to work!!!!!')

Server4 = Server.create!(
  server_owner_id: Vivian.id,
  server_name: "Vivian's Server",
  public: false
)
Server4.server_Icon.attach(io: File.open('app/assets/images/purpleFlowers.jpg'),
                           filename: 'purpleFlowers.jpg')
Server4.server_banner.attach(io: File.open('app/assets/images/banners/user_banners/animebunny.jpg'),
                           filename: 'animebunny.jpg')                       

ServerMembership.create(server_id: Server4.id, user_id: Vivian.id)
ServerMembership.create(server_id: Server4.id, user_id: Karen.id)
ServerMembership.create(server_id: Server4.id, user_id: VeraH.id)
ServerMembership.create(server_id: Server4.id, user_id: MadeleineP.id)
ServerMembership.create(server_id: Server4.id, user_id: KrystalR.id)
ServerMembership.create(server_id: Server4.id, user_id: Stacy.id)
ServerMembership.create(server_id: Server4.id, user_id: Ayce.id)
Message.create(channel_id: Server4.channels.first.id, author_id: Vivian.id,
               body: 'Hi I made this server so us gals can talk.')
VivianSFChannel = Channel.create!(channel_name: 'Main', server_id: Server4.id, channel_type: 1)
VivianSFChannelVoice = Channel.create!(channel_name: 'Voice Call', server_id: Server4.id, channel_type: 2)

Message.create(channel_id: VivianSFChannel.id, author_id: Vivian.id,
               body: 'Hi whats up everyone feel free to post memes or ask for help.')

Server5 = Server.create!(
  server_owner_id: MichaelR.id,
  server_name: "MichaelR's Server",
  public: false
)
Server5.server_Icon.attach(io: File.open('app/assets/images/regexIcon.png'),
                           filename: 'regexIcon.png')
Server5.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/doomCodeBackground.jpg'),
                           filename: 'doomCodeBackground.jpg')                       
     
ServerMembership.create(server_id: Server5.id, user_id: MichaelR.id)
ServerMembership.create(server_id: Server5.id, user_id: KrystalR.id)
ServerMembership.create(server_id: Server5.id, user_id: EricB.id)
ServerMembership.create(server_id: Server5.id, user_id: David_allen.id)
ServerMembership.create(server_id: Server5.id, user_id: AlisherP.id)
ServerMembership.create(server_id: Server5.id, user_id: Vivian.id)
ServerMembership.create(server_id: Server5.id, user_id: Karen.id)
ServerMembership.create(server_id: Server5.id, user_id: VeraH.id)
ServerMembership.create(server_id: Server5.id, user_id: MadeleineP.id)
ServerMembership.create(server_id: Server5.id, user_id: Gabriel.id)
ServerMembership.create(server_id: Server5.id, user_id: KevinN.id)
Message.create(channel_id: Server5.channels.first.id, author_id: MichaelR.id,
               body: 'Made this so we can talk.')

MikeRFC = Channel.create!(channel_name: 'Main', server_id: Server5.id, channel_type: 1)
MikeRFCVoice = Channel.create!(channel_name: 'Voice Chat', server_id: Server5.id, channel_type: 2)

Message.create(channel_id: MikeRFC.id, author_id: MichaelR.id,
               body: 'Hi whats up everyone feel free to post memes or ask for help.')

Server6 = Server.create!(
  server_owner_id: Karen.id,
  server_name: 'Paint By Numbers',
  public: false
)
Server6.server_Icon.attach(io: File.open('app/assets/images/paintbynumbersicon.png'),
                           filename: 'paintbynumbersicon.png')
Server6.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/paintByNumbersBanner.gif'),
                           filename: 'paintByNumbersBanner.gif')                       

ServerMembership.create(server_id: Server6.id, user_id: Karen.id)
ServerMembership.create(server_id: Server6.id, user_id: Gabriel.id)
ServerMembership.create(server_id: Server6.id, user_id: MichaelR.id)
Message.create(channel_id: Server6.channels.first.id, author_id: Karen.id,
               body: "Made this so we can talk about what we're going to do for our MERN Project.")
PaintByNumbersChannel = Channel.create!(channel_name: 'Paint By Numbers - Project Plans', server_id: Server6.id,
                                        channel_type: 1)
PBNCVoice = Channel.create!(channel_name: 'Voice Call', server_id: Server6.id, channel_type: 2)

Message.create(channel_id: PaintByNumbersChannel.id, author_id: Karen.id,
               body: 'Okay I made this server so we can talk about what we need to do for our MERN Project.')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Gabriel.id,
               body: 'Okay Great Idea we should make that app, that I was talking about a while ago.')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: MichaelR.id,
               body: 'Are You talking about that app, idea with the reveal titles to show a hidden picture? Nonograms is what I believe they are called. @Gabriel')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Gabriel.id,
               body: 'Yup! Thats the idea I was referring to there is only one website that has this game but it barely has any features.')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: MichaelR.id,
               body: 'Okay Sounds Great I remember some Algorithms that could help us with this.')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Gabriel.id, body: 'Great!')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Karen.id,
               body: 'Sounds cool, so what are we going to call it ?')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Gabriel.id,
               body: 'How about Paint by Numbers ? Since we are painting a picture based on a random number of of label tiles?')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: MichaelR.id,
               body: 'I like the name, pretty simple and clear.')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Karen.id, body: 'Agreed!')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Gabriel.id,
               body: 'Great! So I guess i can work on the game portion.')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Gabriel.id,
               body: '@Karen you can work on the design, since your an amazing front end designer')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Gabriel.id,
               body: '@miker you can handle the backend since your great with handle requests, validations, and error handling etc.')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: MichaelR.id, body: 'Sounds Cool. @Gabriel')
Message.create(channel_id: PaintByNumbersChannel.id, author_id: Karen.id, body: 'Same. @Gabriel')

Server7 = Server.create!(
  server_owner_id: Leo.id,
  server_name: 'Line Alert',
  public: false
)
Server7.server_Icon.attach(io: File.open('app/assets/images/linealerticon.png'), filename: 'linealerticon.png')
Server7.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/lineAlertBanner.jpg'), filename: 'lineAlertBanner.jpg')

ServerMembership.create(server_id: Server7.id, user_id: Leo.id)
ServerMembership.create(server_id: Server7.id, user_id: Vivian.id)
ServerMembership.create(server_id: Server7.id, user_id: NikhilK.id)
ServerMembership.create(server_id: Server7.id, user_id: TomLL.id)
Message.create(channel_id: Server7.channels.first.id, author_id: Leo.id,
               body: "Made this so we can talk about what we're going to do for our MERN Project.")
LineAlertChannel = Channel.create!(channel_name: 'Line Alert - Project Plans', server_id: Server7.id, channel_type: 1)
LineAlertChannelVoice = Channel.create!(channel_name: 'Voice Chat', server_id: Server7.id, channel_type: 2)
Message.create(channel_id: LineAlertChannel.id, author_id: Leo.id, body: 'So our project idea? ')
Message.create(channel_id: LineAlertChannel.id, author_id: NikhilK.id,
               body: 'I think we should keep it simple, like lets make an app thats been made before like Citizen')
Message.create(channel_id: LineAlertChannel.id, author_id: Vivian.id, body: 'A Citizen Clone sounds cool.')
Message.create(channel_id: LineAlertChannel.id, author_id: TomLL.id,
               body: "Regardless which idea we do, I'll handle the styling.")
Message.create(channel_id: LineAlertChannel.id, author_id: NikhilK.id, body: "I think we should do a Citizen Clone theres many attempts out there. Plus it can be done within a week,
     MikeR told me that he and his friends did it in 24 hours for a Hackathon back when he was in college.")
Message.create(channel_id: LineAlertChannel.id, author_id: Leo.id, body: "Well considering that it seems like a good idea,
    plus it seems like a helpful app considering what has been going on in the subways recently.")
Message.create(channel_id: LineAlertChannel.id, author_id: Vivian.id,
               body: 'Yeah lets make it, an app thats useful seems alot more appealing to employers.')
Message.create(channel_id: LineAlertChannel.id, author_id: TomLL.id,
               body: 'Agreed @Vivian, plus it seems like a more valuble project if it is helpful.')
Message.create(channel_id: LineAlertChannel.id, author_id: Leo.id,
               body: 'Alright, then its settled. We will make a Citizen Clone, lets call it Line Alert.')

Server8 = Server.create!(
  server_owner_id: DuncanM.id,
  server_name: 'MadLibs',
  public: false
)
Server8.server_Icon.attach(io: File.open('app/assets/images/madlibsicon.png'), filename: 'madlibsicon.png')
Server8.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/madlibsBanner.jpg'), filename: 'madlibsBanner.jpg')

ServerMembership.create(server_id: Server8.id, user_id: DuncanM.id)
ServerMembership.create(server_id: Server8.id, user_id: MikeH.id)
ServerMembership.create(server_id: Server8.id, user_id: NaranI.id)
Message.create(channel_id: Server8.channels.first.id, author_id: DuncanM.id,
               body: "Made this so we can talk about what we're going to do for our MERN Project.")
MadLibsChannel = Channel.create!(channel_name: 'MadLibs - Project Plans', server_id: Server8.id, channel_type: 1)
MadLibsChannelVoice = Channel.create!(channel_name: 'Voice Chat', server_id: Server8.id, channel_type: 2)
Message.create(channel_id: MadLibsChannel.id, author_id: DuncanM.id,
               body: 'Hmm okay, I think for our Project idea we should make a clone of Cards against Humanity.')
Message.create(channel_id: MadLibsChannel.id, author_id: MikeH.id,
               body: 'Thats seems like a good idea considering the original fan made website was taken down a while ago.')
Message.create(channel_id: MadLibsChannel.id, author_id: NaranI.id,
               body: 'Thats a great idea actually!, it seems like it would be a fun project to make and use later on.')

Server9 = Server.create!(
  server_owner_id: VeraH.id,
  server_name: 'Dina-Dopt',
  public: false
)
Server9.server_Icon.attach(io: File.open('app/assets/images/trexicon.png'), filename: 'trexicon.png')
Server9.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/dinadopt.jpg'), filename: 'dinadopt.jpg')

ServerMembership.create(server_id: Server9.id, user_id: VeraH.id)
ServerMembership.create(server_id: Server9.id, user_id: AlanN.id)
ServerMembership.create(server_id: Server9.id, user_id: MikeC.id)
ServerMembership.create(server_id: Server9.id, user_id: KevinN.id)
Message.create(channel_id: Server9.channels.first.id, author_id: VeraH.id,
               body: "Made this so we can talk about what we're going to do for our MERN Project.")
DinaDoptChannel = Channel.create!(channel_name: 'Dina-Dopt - Project Plans', server_id: Server9.id, channel_type: 1)
DinaDoptChannelVoice = Channel.create!(channel_name: 'Voice Chat', server_id: Server9.id, channel_type: 2)

Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: 'Hey!, There what should our MERN Project be about?')
Message.create(channel_id: DinaDoptChannel.id, author_id: AlanN.id, body: 'Hmm, I have no idea @VeraH.')
Message.create(channel_id: DinaDoptChannel.id, author_id: MikeC.id,
               body: 'Yo Have you guys seen the new Jurassic World Movie ?')
Message.create(channel_id: DinaDoptChannel.id, author_id: KevinN.id,
               body: "@Mike C nah, I heard Madeleine's group is doing a pet adoption app though.")
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: 'Hey!, Thats it lets make a dinosaur adoption app.')
Message.create(channel_id: DinaDoptChannel.id, author_id: AlanN.id, body: 'Hmm, okay im fine with that.')
Message.create(channel_id: DinaDoptChannel.id, author_id: MikeC.id,
               body: 'wont that seem kind of like... taking their idea?')
Message.create(channel_id: DinaDoptChannel.id, author_id: KevinN.id,
               body: '@Mike C nah, their app is to adopt pets, we are adopting dinosaurs.')
Message.create(channel_id: DinaDoptChannel.id, author_id: MikeC.id,
               body: "Do You think Ayce and Kika will approve of the idea? I mean its similar to Madeleine's group idea? ")
Message.create(channel_id: DinaDoptChannel.id, author_id: KevinN.id,
               body: 'Well, I dont know of anyother ideas, I guess we can just press our luck and try really hard on the pitch to convince them.')
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: 'Hey!, I got it, dont worry about the pitch, they approved it')
Message.create(channel_id: DinaDoptChannel.id, author_id: MikeC.id,
               body: 'Really? already? @Vera')
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: 'Yup @MikeC')
Message.create(channel_id: DinaDoptChannel.id, author_id: AlanN.id,
               body: 'So how are we spliting up the work? @VeraH.')
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: 'Well Since its a week and we dont have alot of experience with MERN stack.')
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: 'I think we should just organize and split the work to everyones strengths and work together on big parts to speed up development')
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: 'So no one has a dedicated role we are all tackling each mvp together')
Message.create(channel_id: DinaDoptChannel.id, author_id: AlanN.id,
               body: 'Okay @Vera')
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: '@MikeC since your great at the backend i want you to be the lead for it though')
Message.create(channel_id: DinaDoptChannel.id, author_id: MikeC.id,
               body: 'okay @Vera')
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: "I'll be frontend lead  @Alan & @Kevin you'll both hop between roles")
Message.create(channel_id: DinaDoptChannel.id, author_id: AlanN.id,
               body: 'Okay, sounds more clear of a plan now. @Vera')
Message.create(channel_id: DinaDoptChannel.id, author_id: KevinN.id,
               body: 'Well, I guess we can start on user auth first.')
Message.create(channel_id: DinaDoptChannel.id, author_id: VeraH.id,
               body: "agreed @Kevin")
Server10 = Server.create!(
  server_owner_id: MadeleineP.id,
  server_name: 'PickaPet',
  public: false
)

Server10.server_Icon.attach(io: File.open('app/assets/images/pickapeticon.png'), filename: 'pickapeticon.png')
Server10.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/pickapet.gif'), filename: 'pickapet.gif')

ServerMembership.create(server_id: Server10.id, user_id: MadeleineP.id)
ServerMembership.create(server_id: Server10.id, user_id: DavidZ.id)
ServerMembership.create(server_id: Server10.id, user_id: LinS.id)
ServerMembership.create(server_id: Server10.id, user_id: EvanF.id)
Message.create(channel_id: Server10.channels.first.id, author_id: MadeleineP.id,
               body: "Made this so we can talk about what we're going to do for our MERN Project.")
PickaPetChannel = Channel.create!(channel_name: 'PickaPet - Project Plans', server_id: Server10.id, channel_type: 1)
PickaPetChannelVoice = Channel.create!(channel_name: 'Voice Chat', server_id: Server10.id, channel_type: 2)

Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: 'So whats our Project idea Boys? of do you all still want to go with my idea of the pet adoption app ?')
Message.create(channel_id: PickaPetChannel.id, author_id: DavidZ.id,
               body: 'Yeah I like the pet adoption app, it seems like it will be similar to the Pokedex app we worked on in class.')
Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: 'Yeah, I Know thats where I got the idea from. @DavidZ')
Message.create(channel_id: PickaPetChannel.id, author_id: LinS.id,
               body: 'Yeah, I think that the pet adoption app would be pretty cool app idea.')
Message.create(channel_id: PickaPetChannel.id, author_id: EvanF.id,
               body: 'So, How do we get started on it? who`s doing what roles?')
Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: 'Okay Lets see since theres 4 of us two of us will probably have to do a flex role')
Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: "@DavidZ You'll handle frontend")
Message.create(channel_id: PickaPetChannel.id, author_id: DavidZ.id,
               body: 'Okay @Madeleine')
Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: '@Evan youll handle backend auth and a few other backend roles ')
Message.create(channel_id: PickaPetChannel.id, author_id: EvanF.id,
               body: 'Okay sounds fair @Madeleine')
Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: '@Lin Youll help with both frontend and backend development, but I want you to do some research on collecting assets and animation design')
Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: 'While both Evan and David handle front and backend auth')
Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: "I'll work on both frontend and backend, but for now I'll work on the design docs and Pitch to Ayce and KinKa so they'll approve of our idea.")
Message.create(channel_id: PickaPetChannel.id, author_id: LinS.id,
               body: 'Okay @Madeleine Sounds good cant wait to get started!')
Message.create(channel_id: PickaPetChannel.id, author_id: MadeleineP.id,
               body: "Hey!, There's a bug in your code @DavidZ.")
Message.create(channel_id: PickaPetChannel.id, author_id: DavidZ.id,
               body: 'Hmm okay, I checked it cant really figure it out as some of the code is from @EvanP.')
Message.create(channel_id: PickaPetChannel.id, author_id: LinS.id,
               body: "Hang on Guys, I'll message @EvanP to come over and explain.")
Message.create(channel_id: PickaPetChannel.id, author_id: EvanF.id,
               body: "Hey sorry, I'll explain the code in a second. Plus I fixed the bug too!")

Server11 = Server.create!(
  server_owner_id: David_allen.id,
  server_name: 'Fun_Finder',
  public: false
)

Server11.server_Icon.attach(io: File.open('app/assets/images/funIdeasicon.png'), filename: 'funIdeasicon.png')
Server11.server_banner.attach(io: File.open('app/assets/images/banners/server_banners/funfinder.gif'), filename: 'funfinder.gif')

ServerMembership.create(server_id: Server11.id, user_id: David_allen.id)
ServerMembership.create(server_id: Server11.id, user_id: EricB.id)
ServerMembership.create(server_id: Server11.id, user_id: AlisherP.id)
Message.create(channel_id: Server11.channels.first.id, author_id: David_allen.id,
               body: "Made this so we can talk about what we're going to do for our MERN Project.")
FunFinderChannel = Channel.create!(channel_name: 'Fun_Finder - Project Plans', server_id: Server11.id, channel_type: 1)
FunFinderChannelVoice = Channel.create!(channel_name: 'Voice Chat', server_id: Server11.id, channel_type: 2)

Message.create(channel_id: FunFinderChannel.id, author_id: David_allen.id, body: 'Hey!, Lets meet Up for our Project!')
Message.create(channel_id: FunFinderChannel.id, author_id: EricB.id,
               body: "Hmm okay, I'm available all this weekend to work on it, I'm down to meet up.")
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id, body: "Im free too let's meet up.")

Message.create(channel_id: FunFinderChannel.id, author_id: David_allen.id,
               body: 'Hey!, What should are project be about!')
Message.create(channel_id: FunFinderChannel.id, author_id: EricB.id,
               body: 'Not sure, I dont have an idea.')
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id,
               body: 'Yeah everyone seems to have a good idea that hits a certain niche.')
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id,
               body: 'Its hard to think of and choose something that isnt the similar to everyone elses.')
Message.create(channel_id: FunFinderChannel.id, author_id: EricB.id,
               body: 'Hmm, remember the bench bnb project? what if we use the google map api to find things?')
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id, body: 'Like? @Eric')
Message.create(channel_id: FunFinderChannel.id, author_id: EricB.id,
               body: 'Like points of interest?')
Message.create(channel_id: FunFinderChannel.id, author_id: David_allen.id,
               body: 'Hey!, i got it maybe we can use that to make an app were we find places based on interests and allow people to meet each other and make friends around those activities? ')
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id,
               body: 'That sounds like a cool idea, actually @David-Allen.')
Message.create(channel_id: FunFinderChannel.id, author_id: EricB.id,
               body: 'Yeah! That idea is different from everybody elses idea.')
Message.create(channel_id: FunFinderChannel.id, author_id: David_allen.id,
               body: 'You think Ayce and Kinka will approve of it ? @Eric')
Message.create(channel_id: FunFinderChannel.id, author_id: EricB.id,
               body: 'Yeah! since idea is different from everybody elses idea, and it serves a very useful purpose im sure they will approve of it.')
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id,
               body: 'So its settled where making a friend finder app ? ')
Message.create(channel_id: FunFinderChannel.id, author_id: David_allen.id,
               body: 'I think Fun_Finder would be a great name for the app')
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id, body: '....')
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id, body: 'ahh okay so its fun_finder then')
Message.create(channel_id: FunFinderChannel.id, author_id: EricB.id,
               body: 'Okay so its settled then, lets work on the pitch so when David-Allen goes to pitch to kinka and Ayce they will be agree to approve it')
Message.create(channel_id: FunFinderChannel.id, author_id: AlisherP.id, body: 'cool.')
