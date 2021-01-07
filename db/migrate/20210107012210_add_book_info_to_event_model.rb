class AddBookInfoToEventModel < ActiveRecord::Migration[6.0]
  def change
    add_column :events, :isbn13, :integer
    add_column :events, :book_tile, :string
    add_column :events, :book_subtitle, :string
    add_column :events, :book_author, :string
    add_column :events, :book_description, :string
  end
end
