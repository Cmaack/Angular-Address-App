class Api::ContactsController < ApplicationController

  def index
    dbContacts = Contact.all
    render json: {contacts: dbContacts}
  end

  def create
    new_contact = Contact.create( contact_params )
    render json: new_contact
  end


  def destroy
      Contact.destroy(params[:id])

    end

  private

  def contact_params
    params.require(:contact).permit(:first_name, :last_name, :phone_number, :email, :street_address, :city, :zip, :country, :state)
  end
end
