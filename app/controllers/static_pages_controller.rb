class StaticPagesController < ApplicationController
  def root
    render :root
  end

#   def frontend_index
#     render file: Rails.root.join('public', 'index.html')
#   end
end
