class Api::V1::CalendarController < ApplicationController
    def redirect
        client = Signet::OAuth2::Client.new(client_options)
    
        redirect_to client.authorization_uri.to_s
    end

    def callback
        client = Signet::OAuth2::Client.new(client_options)
        client.code = params[:code]
    
        response = client.fetch_access_token!
    
        session[:authorization] = response
        byebug
        redirect_to '/api/v1/turkey'
    end
    
    
    def turkey
    
      client = Signet::OAuth2::Client.new(client_options)
      client.update!(session[:authorization])
    
      service = Google::Apis::CalendarV3::CalendarService.new
      service.authorization = client
    
      @calendar_list = service.list_calendar_lists

      render json: @calendar_list
      byebug
    end

    
    def tasks
      client = Signet::OAuth2::Client.new(client_options)
      client.update!(session[:authorization])
    
      service = Google::Apis::CalendarV3::CalendarService.new
      service.authorization = client
    
      @event_list = service.list_events(params[:calendar_id])
    end
      
      




    private
    
    def client_options
      {
        client_id: Rails.application.secrets.google_client_id,
        client_secret: Rails.application.secrets.google_client_secret,
        authorization_uri: 'https://accounts.google.com/o/oauth2/auth',
        token_credential_uri: 'https://accounts.google.com/o/oauth2/token',
        scope: Google::Apis::CalendarV3::AUTH_CALENDAR,
        redirect_uri: 'http://localhost:3000/callback'
      }
    end
end
