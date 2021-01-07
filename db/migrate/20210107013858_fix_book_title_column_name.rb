class FixBookTitleColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :events, :book_tile, :book_title
  end
end
