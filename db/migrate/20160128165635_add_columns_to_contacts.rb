class AddColumnsToContacts < ActiveRecord::Migration
  def change
    add_column :contacts, :street_address, :string
    add_column :contacts, :city, :string
    add_column :contacts, :zip, :integer
    add_column :contacts, :country, :string
    add_column :contacts, :state, :string
  end
end
