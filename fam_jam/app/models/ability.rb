class Ability
  include CanCan::Ability

  def initialize(user)
    
      user ||= User.new 

      alias_action(:create, :read, :update, :destroy, to: :crud)

      can :crud, Event do |event|
        user == event.user
      end

      if user.is_admin?
        can :manage, :all
    end
end
