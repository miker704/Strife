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

# demo user 1
User.create(
    username: 'DemoUser1',
    email: 'DemoUser1@strife.com',
    password: 'qwerty1234',
    birthday: '02/25/1996'
)

# demo user 2
User.create(
    username: 'DemoUser2',
    email: 'DemoUser2@strife.com',
    password: 'QWERTY1234',
    birthday: '02/25/1997'
)


#discord bot

