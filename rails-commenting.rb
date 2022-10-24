# ASSESSMENT 6: Rails Commenting Challenge

# Add comments to the Rails Blog Post Challenge
# Explain the purpose and functionality of the code directly below the 10 comment tags


# FILE: app/controller/blog_posts_controller.rb

# ---1)
# Controller for BlogPosts: BlogPostsController is the child class that's accessing ApplicationController the parent class
class BlogPostsController < ApplicationController
  def index
    # ---2)
    # This is accessing @posts and using .all to access every index of BlogPost
    @posts = BlogPost.all
  end

  # ---3)
  # Controller method 'show'  to return a specific BlogPost based on the param [:id]
  def show
    @post = BlogPost.find(params[:id])
  end

  # ---4)
  # Controller method "new" to create a new instance of BlogPost to the existing blog class
  def new
    @post = BlogPost.new
  end

  def create
    # ---5)
    # Method "create" used for a new BlogPost to be added and saved in the database. Checked if valid, adhering to the parameters, and then redirected to blog_post_path to diplay
    @post = BlogPost.create(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def edit
    # ---6)
    # Method "edit" used to edit an exisiting BlogPost, found via param id
    @post = BlogPost.find(params[:id])
  end

  def update
    @post = BlogPost.find(params[:id])
    # ---7)
    # Method "update" used after a post has been accessed by "edit". Checked if valid and adhering to params, then redirected to blog_post_path to display new edited and updated blog post.
    @post.update(blog_post_params)
    if @post.valid?
      redirect_to blog_post_path(@post)
    end
  end

  def destroy
    @post = BlogPost.find(params[:id])
    if @post.destroy
      # ---8)
      # "destroy" is used to delete an exisiting blog post based param id, once deleted redirects user back to blog post path
      redirect_to blog_posts_path
    end
  end

  # ---9)
  # private is a strong param which is used to set restrictions on controller methods. method will only pass if we allow it to
  private
  def blog_post_params
    # ---10)
    # when using strong params, need to utilize require and permit
    # require uses the file name blog_post
    # permit uses the attributes being called, in this case :title and :content
    params.require(:blog_post).permit(:title, :content)
  end
end
