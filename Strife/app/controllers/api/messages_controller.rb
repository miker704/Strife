class Api::MessagesController < ApplicationController
    def create
        @message = Message.new(message_params)
        if @message.save
          flash[:success] = "Object successfully created"
          redirect_to @message
        else
      
          render json: @message.errors.full_messages , status: 400
        end
    end
    

    def update
        @message = Message.find_by(id: params[:id])
        if @message.update(message_params)
          render :show
        else
            render json: @message.errors.full_messages , status: 400
        end
    end
    


    def destroy
        @message = Message.find_by(id: params[:id])
        if @message.destroy
            flash[:success] = 'Object was successfully deleted.'
            redirect_to messages_url
        else
            render json: @message.errors.full_messages , status: 400
        end
    end
    

    private
    def message_params
        return params.require(:message).permit(:channel_id,:author_id,:body)
    end


end
