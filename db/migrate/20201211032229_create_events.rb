class CreateEvents < ActiveRecord::Migration[6.0]
  def change
    create_table :events do |t|
      t.text :name
      t.date :date
      t.string :time
      t.text :meeting_link
      t.integer :user_id
      t.integer :book_id

      t.timestamps
    end
  end
end
