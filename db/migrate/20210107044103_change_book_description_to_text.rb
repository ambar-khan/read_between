class ChangeBookDescriptionToText < ActiveRecord::Migration[6.0]
  def change
    change_column :events, :book_description, :text
  end
end
