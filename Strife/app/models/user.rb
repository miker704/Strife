class User < ApplicationRecord

    # validates :email, :username, :password_digest, :birthday, :session_token, presence: true
    # validates :username, uniqueness: true, length: {minimum: 2, maximum: 50}
    # validates :email, uniqueness: true
    # validates :phone, uniqueness: true, allow_nil: true


    validates :email, :username, :password_digest, :session_token, presence: true
    validates :email, uniqueness: true
    validates :password, length: {minimum: 6, allow_nil: true}
    validates :password_digest, :id_tag, presence: true
    validates :session_token, uniqueness: true
    attr_reader :password

    after_initialize :ensure_session_token

    # SPIRE

    def self.find_by_credentials(email,password)
        user = User.find_by(email: email)
        return nil if user.nil?
        user.is_password?(password) ? user : nil
    end

    def password=(password)
        @password =password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        return BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.session_token = SecureRandom::urlsafe_base64
        self.save!
        return self.session_token
    end

    def ensure_session_token
        self.session_token ||= SecureRandom::urlsafe_base64
    end

    # def ensure_id_tag
    #     self.id_tag ||= rand(1000..99999).to_s
    # end



end
