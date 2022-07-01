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
demoChannel = Channel.create!(channel_name: "Demo Channel", server_id: 1)
kinKaCircle = Channel.create!(channel_name: "Kin Ka's Circle", server_id: 2)
ayceCircle = Channel.create!(channel_name: "Ayce's Circle", server_id: 3)


ServerMembership.create(server_id: ayceServer.id , user_id: demouser1.id)
ServerMembership.create(server_id: ayceServer.id , user_id: demouser2.id)
ServerMembership.create(server_id: ayceServer.id , user_id: kinKa.id)
ServerMembership.create(server_id: ayceServer.id , user_id: spencer.id)
ServerMembership.create(server_id: ayceServer.id , user_id: stacy.id)

Message.create(channel_id: ayceServer.id, author_id:demouser1.id, body: "hello?")
Message.create(channel_id: ayceServer.id, author_id: demouser2.id, body: "hell0!")







