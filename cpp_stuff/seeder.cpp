// using this as a quick way to generate random seeds without faker
#include <fstream>
#include <iostream>
using namespace std;

// demouser1=User.create!(
//     username: 'DemoUser1',
//     email: 'DemoUser1@strife.com',
//     birthday: Date.new(1996,02,25),
//     password: 'qwerty1234',
// )
// Server6 = Server.create!(
//     server_owner_id: demouser1.id,
//     server_name: "Server6",
//     public: true

// )
// kinKaCircle = Channel.create!(channel_name: "Kin Ka's Circle", server_id: kinKaServer.id)
// ServerMembership.create(server_id: ayceServer.id , user_id: demouser1.id)
// Message.create(channel_id: ayceServer.id, author_id:demouser1.id, body: "hello?")
// dm_server_1 = DmServer.create!( owner_id: demouser1.id )
// dm_membership_1 = DmMember.create!( dm_server_id: dm_server_1.id, dm_member_id: demouser1.id )
// DmMessage.create!(dm_server_id: dm_server_1.id, sender_id: demouser2.id, body:"You should apply to App Academy. You would be a great software engineer." )

int main() {

    int choice = NULL;
    string user_Names [] = { "MichaelR","Vivian","MikeC", "MikeH", "Vera","Eric","Evan","David-allen","DavidZ","Leo","Karen","Gabriel","Alisher", "Tom",
    "Duncan", "Naran", "Kevin", "Nikhil","Madeline","Alan" };
    ofstream OUTPUT_FILE_RESULT("SeedFile.txt");
    OUTPUT_FILE_RESULT.close();
    string file_Name = "SeedFile";



    // run loop

    while (1) {
        std::cout << "Creating Seeds for rails db" << std::endl;
        std::cout << "enter either " << std::endl;
        std::cout << "0). Exit" << std::endl;
        std::cout << "1). run seed generator file is generate in this folder" << std::endl;
        cin>>choice;
        switch(choice){
                case 0 :  std::cout << "Aborting Program Exit(0)" << std::endl;
                    exit(0);
                    break;
                case 1: std::cout<<"running seed generator creating file"<<std::endl;
                    break;
                default: std::cout <<"wrong choice try again"<<std::endl;
        }
        
    }

    system("pause");
    return 0;
}