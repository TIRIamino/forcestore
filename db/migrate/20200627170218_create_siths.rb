class CreateSiths < ActiveRecord::Migration[6.0]
  def change
    create_table :siths do |t|
      t.string :name
      t.string :rank
      t.integer :stars

      t.timestamps
    end
  end
end
